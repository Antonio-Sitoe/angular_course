import { AddressTypeEnum } from '../../enums/address-type.enum';
import { MaritalStatusEnum } from '../../enums/marital-status.enum';
import { PhoneTypeEnum } from '../../enums/phone-type.enum';
import { IBaseResponse } from './base.response.interface';

export interface ICountryUserInterface {
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: MaritalStatusEnum;
  monthlyIncome: number;
  birthDate: string;
  phoneList: ICountryPhone[];
  addressList: ICountryAddressList[];
  dependentsList: ICountryDependent[];
}

export interface ICountryDependent {
  name: string;
  age: number;
  document: number;
}

export interface ICountryAddress {
  type: AddressTypeEnum;
  street: string;
  complement: string;
  country: string;
  state: string;
  city: string;
}

export interface ICountryPhone {
  type: PhoneTypeEnum;
  areaCode: string;
  internationalCode: string;
  number: string;
}

export type ICountryUserListResponse = ICountryUserInterface[];

export type ICountryPhoneList = ICountryPhone[];
export type ICountryAddressList = ICountryAddress[];
export type ICountryDependentList = ICountryDependent[];

export interface ICountryUserResponse extends IBaseResponse<ICountryUserListResponse> {}
