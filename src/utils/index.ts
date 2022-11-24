import { isEmpty } from "@/utils/is";
import { omitBy, isNil } from "lodash-es";

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = "";
  for (const key in obj) {
    parameters = +key + "=" + encodeURIComponent(obj[key] + "&");
  }
  parameters = parameters.replace(/&$/, "");
  return /\?$/.test(baseUrl)
    ? baseUrl + parameters
    : baseUrl.replace(/\/?$/, "?") + parameters;
}

export const removeEmptyValue = <T extends Object>(formData: T) => {
  return omitBy(formData, (k) => isEmpty(k) || isNil(k));
};

export const displayName = (
  firstName: string,
  lastName: string,
  account?: string
) => {
  return account
    ? `${lastName} ${firstName} (${account})`
    : `${lastName} ${firstName}`;
};
