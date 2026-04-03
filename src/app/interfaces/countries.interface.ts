import { IBaseResponse } from './base.response.interface';

export interface ICountry {
  iso2: string;
  lat: number;
  long: number;
  name: string;
}

export type ICountryResponse = IBaseResponse<ICountry[]>;
export type ICountryListResponse = ICountryResponse['data'];
