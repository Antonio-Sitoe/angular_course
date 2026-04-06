import { IBaseResponse } from "./base.response.interface";

export interface IStateProps {
  id: number;
  description: string;
  abbreviation: string;
}

export type IStateListResponse = IStateProps[];

export interface IStateData {
  name: string;
  state_code?: string;
  code?: string;
}

export interface ICountryStateData {
  name: string;
  iso3: string;
  states: IStateData[];
}

export type ICountryStateListResponse = IStateData[];

export interface ICountryStateResponse
  extends IBaseResponse<ICountryStateData> {}
