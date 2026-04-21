import { PhoneTypeEnum } from "../enums/phone-type.enum";
import {
  ICountryPhone,
  ICountryPhoneList,
} from "../interfaces/country/country.user.interface";
import { PHONE_TYPE_DESCRIPTION_MAP } from "./phone-type-description-map";

interface IPreparedPhoneList {
  type: number;
  typeDescription: string;
  phoneNumber: string;
}

export const preparePhoneListHelper = (
  originalUserPhoneList: ICountryPhoneList,
  callbackFn: (phoneListToDisplay: IPreparedPhoneList) => void
) => {
  Object.keys(PHONE_TYPE_DESCRIPTION_MAP)
    .map(Number)
    .forEach((key) => {
      const phoneFound = originalUserPhoneList.find(
        (phone) => phone.type === key
      );
      if (phoneFound) {
        callbackFn({
          type: key,
          typeDescription: PHONE_TYPE_DESCRIPTION_MAP[key as PhoneTypeEnum],
          phoneNumber: phoneFound ? formatPhoneNumber(phoneFound) : "N/A",
        });
      }
    });
};

export const formatPhoneNumber = (phone: ICountryPhone): string => {
  const { areaCode, internationalCode, number } = phone;
  return `+${internationalCode} (${areaCode}) ${number}`;
};
