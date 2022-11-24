import { ref, watchEffect } from "vue";
import SelectOptionEnum from "@/enums/SelectionOptionEnum";
import { BaseService } from "@/services/base.service";
import { pull } from "lodash";
type TUserOptions = {
  label: string;
  value: string;
  role: string;
};

type TOptionsResponse = {
  userOptions: TUserOptions[];
};

export function useSelectOption(optionsNames: SelectOptionEnum[]) {
  const optionsResponse = ref<TOptionsResponse>({
    userOptions: [],
  });

  const getSelectOptions = async () => {
    const service = new BaseService();

    const iterable = optionsNames.includes(SelectOptionEnum.USER)
      ? [
          service.getSelectOptions(
            pull([...optionsNames], SelectOptionEnum.USER)
          ),
          service.getUserOptions(),
        ]
      : [service.getSelectOptions(optionsNames)];

    const [selectOptions, userOptions] = await Promise.all<any>(iterable);

    selectOptions.userOptions = userOptions || [];
    optionsResponse.value = selectOptions;
  };

  getSelectOptions();

  return optionsResponse;
}
