import { displayName } from "@/utils";
import Http, { get, post, patch, remove, put } from "@/utils/http";

type TBaseRequest = {
  TSearch: any;
  TCreate: any;
  TUpdate: any;
};

type TBaseResponse = {
  TList: any;
  TDetail: any;
};

const CODE_TABLE_URL = "/code-table";
const USERS_URL = "/users";

type TCodeTableResponse = {
  [k: string]: {
    categoryID: string;
    code: string;
    displayName: string;
    label: string;
  }[];
};

type TUserResponse = {
  account: string;
  userID: string;
  roleCode: number;
  firstName: string;
  lastName: string;
}[];

type IOption = {
  label: string;
  value: string;
};

type TOptionsResponse = {
  [k: string]: IOption;
};

export class BaseService<
  T extends TBaseRequest,
  R extends TBaseResponse
> {

  get request() {
    return { Http, get, post, patch, remove, put };
  }

  async getUsers() {
    return await get<TUserResponse>({ url: USERS_URL });
  }

  async getUserOptions() {
    const users = await this.getUsers();

    return users.map(({ account, userID, roleCode, firstName, lastName }) => ({
      label: displayName(firstName, lastName, account),
      value: userID,
      role: roleCode,
    }));
  }

  async getCodeTable(categoryIdList?: string[]) {
    return await get<TCodeTableResponse>(
      { url: CODE_TABLE_URL },
      {
        params: { categoryIdList },
        paramsSerializer: {
          encode: (params) => {
            return encodeURIComponent(params);
          },
        },
      }
    );
  }

  async getSelectOptions(categoryIdList?: string[]) {
    const codeTable = await this.getCodeTable(categoryIdList);
    return Object.keys(codeTable).reduce(
      (response: any, categoryId: string) => {
        response[categoryId] = codeTable[categoryId].map((value) => {
          return {
            value: value.code,
            label: value.label,
          };
        });

        return response;
      },
      {}
    ) as TOptionsResponse[];
  }

}
