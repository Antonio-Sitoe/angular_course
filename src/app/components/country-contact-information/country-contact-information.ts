import { Component, Input } from '@angular/core';
import { UserInfoItem } from '../user-info-item/user-info-item';
import { CountryPhoneList } from './country-phone-list/country-phone-list';
import { ICountryUserInterface } from '../../interfaces/country/country.user.interface';

@Component({
  selector: 'app-country-contact-information',
  imports: [UserInfoItem, CountryPhoneList],
  templateUrl: './country-contact-information.html',
  styleUrl: './country-contact-information.css',
})
export class CountryContactInformation {
  @Input({ required: true }) user: ICountryUserInterface = {} as ICountryUserInterface;
}
