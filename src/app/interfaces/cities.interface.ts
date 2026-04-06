import { IBaseResponse } from "./base.response.interface";

export interface CityProps {
  state: string;
  country: string;
}

export interface ICityData extends IBaseResponse<string[]> {}
