import { Component, Input, OnChanges } from '@angular/core';
import { ICountryPhoneList } from '../../../interfaces/country/country.user.interface';
import { UserInfoItem } from '../../user-info-item/user-info-item';
import { PhoneTypeEnum } from '../../../enums/phone-type.enum';
import { PHONE_TYPE_DESCRIPTION_MAP } from '../../../utils/phone-type-description-map';

export interface IPhoneListToDisplay {
  type: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-country-phone-list',
  imports: [UserInfoItem],
  templateUrl: './country-phone-list.html',
  styleUrl: './country-phone-list.css',
})
export class CountryPhoneList implements OnChanges {
  phoneListToDisplay: IPhoneListToDisplay[] = [];
  @Input({ required: true }) userPhoneList: ICountryPhoneList | undefined = [];

  preparePhoneList(): void {
    console.log('preparePhoneList');

    this.userPhoneList = [];

    Object.keys(PHONE_TYPE_DESCRIPTION_MAP)
      .map(Number)
      .forEach((key) => {
        const phoneFound = this.userPhoneList?.find((phone) => phone.type === key);
        if (phoneFound) {
          this.phoneListToDisplay.push({
            type: PHONE_TYPE_DESCRIPTION_MAP[phoneFound.type as PhoneTypeEnum],
            phoneNumber: phoneFound.number,
          });
        }
      });
  }

  ngOnChanges(): void {
    console.log(this.userPhoneList);
    const phoneLoaded = Array.isArray(this.userPhoneList) && this.userPhoneList?.length > 0;
    if (phoneLoaded) {
      this.preparePhoneList();
    }
  }
}
