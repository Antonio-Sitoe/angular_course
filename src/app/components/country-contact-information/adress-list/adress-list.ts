import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfoItem } from '../../user-info-item/user-info-item';
import {
  ICountryAddress,
  ICountryAddressList,
} from '../../../interfaces/country/country.user.interface';
import { AddressTypeEnum } from '../../../enums/address-type.enum';

interface IAddressToDisplay extends Omit<ICountryAddress, 'type'> {
  type: string;
}

@Component({
  selector: 'app-adress-list',
  standalone: true,
  imports: [UserInfoItem],
  templateUrl: './adress-list.html',
})
export class AdressList implements OnChanges {
  @Input({ required: true }) userAddressList: ICountryAddressList = [];
  adressToDisplay: IAddressToDisplay[] = [];

  private readonly addressTypeMap: Record<AddressTypeEnum, string> = {
    [AddressTypeEnum.RESIDENTIAL]: 'Residencial',
    [AddressTypeEnum.WORK]: 'Trabalho',
    [AddressTypeEnum.ALTERNATIVE]: 'Alternativo',
  };

  private prepareAddressList(): void {
    this.adressToDisplay = Object.keys(this.addressTypeMap)
      .map(Number)
      .map((type) => this.userAddressList.find((address) => address.type === type))
      .filter((address): address is ICountryAddress => Boolean(address))
      .map((address) => ({
        ...address,
        type: this.addressTypeMap[address.type],
      }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const addressListLoaded = Array.isArray(changes['userAddressList']?.currentValue);
    if (addressListLoaded) {
      this.prepareAddressList();
    }
  }
}
