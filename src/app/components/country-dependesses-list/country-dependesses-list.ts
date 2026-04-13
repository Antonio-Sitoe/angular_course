import { Component, Input } from '@angular/core';
import { ICountryDependentList } from '../../interfaces/country/country.user.interface';
import { UserInfoItem } from '../user-info-item/user-info-item';

@Component({
  selector: 'app-country-dependesses-list',
  standalone: true,
  imports: [UserInfoItem],
  templateUrl: './country-dependesses-list.html',
})
export class CountryDependessesList {
  @Input({ required: true }) dependentsList: ICountryDependentList | null | undefined = [];

  get safeDependentsList(): ICountryDependentList {
    return this.dependentsList ?? [];
  }
}
