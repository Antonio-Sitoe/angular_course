import { UserInfoItem } from "../../user-info-item/user-info-item";
import { ICountryPhoneList } from "../../../interfaces/country/country.user.interface";
import { preparePhoneListHelper } from "../../../utils/prepare-phone-list";
import { Component, Input, OnChanges } from "@angular/core";

export interface IPhoneListToDisplay {
  type: number;
  typeDescription: string;
  phoneNumber: string;
}

@Component({
  selector: "app-country-phone-list",
  imports: [UserInfoItem],
  templateUrl: "./country-phone-list.html",
  styleUrl: "./country-phone-list.css",
})
export class CountryPhoneList implements OnChanges {
  phoneListToDisplay: IPhoneListToDisplay[] = [];
  @Input({ required: true }) userPhoneList: ICountryPhoneList = [];

  preparePhoneList(): void {
    this.phoneListToDisplay = [];
    const originalPhoneList =
      this.userPhoneList && this.userPhoneList.length > 0
        ? this.userPhoneList
        : [];
    preparePhoneListHelper(
      originalPhoneList,
      (phoneListToDisplay: IPhoneListToDisplay) => {
        this.phoneListToDisplay.push(phoneListToDisplay);
      }
    );
  }

  ngOnChanges(): void {
    const phoneLoaded =
      Array.isArray(this.userPhoneList) && this.userPhoneList.length > 0;
    if (phoneLoaded) {
      this.preparePhoneList();
    } else {
      this.phoneListToDisplay = [];
    }
  }
}
