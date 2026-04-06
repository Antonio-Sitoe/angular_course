import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import {
  ICountryStateListResponse,
  ICountryStateResponse,
} from "../interfaces/state.interface";

@Injectable({
  providedIn: "root",
})
export class StatesService {
  constructor(private readonly _httpClient: HttpClient) {}

  getStates(name: string): Observable<ICountryStateListResponse> {
    return this._httpClient
      .post<ICountryStateResponse>(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: name,
        }
      )
      .pipe(
        map((response) =>
          response.data.states.map((state) => {
            return {
              name: state.name,
              code: state.state_code,
            };
          })
        )
      );
  }
}
