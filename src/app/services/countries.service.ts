import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICountryListResponse, ICountryResponse } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly http = inject(HttpClient);

  getCountries(): Observable<ICountryListResponse> {
    return this.http
      .get<ICountryResponse>('https://countriesnow.space/api/v0.1/countries/positions')
      .pipe(map((response) => response.data));
  }
}
