import { Component, Input } from '@angular/core';
import { CountryPhoneList } from './country-phone-list/country-phone-list';
import { ICountryUserInterface } from '../../interfaces/country/country.user.interface';
import { AdressList } from './adress-list/adress-list';

@Component({
  selector: 'app-country-contact-information',
  standalone: true,
  imports: [CountryPhoneList, AdressList],
  templateUrl: './country-contact-information.html',
})
export class CountryContactInformation {
  @Input({ required: true }) user: ICountryUserInterface = {} as ICountryUserInterface;
}
