import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityProps, ICityData } from '../interfaces/country/country.cities.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private readonly _httpClient: HttpClient) {}

  getCities({ country, state }: CityProps): Observable<any> {
    return this._httpClient
      .post<ICityData>('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: country,
        state: state,
      })
      .pipe(map((cities) => cities.data));
  }
}
