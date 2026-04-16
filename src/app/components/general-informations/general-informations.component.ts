import { Component, Input } from "@angular/core";
import { UserInfoItem } from "../user-info-item/user-info-item";
import { ICountryUserInterface } from "../../interfaces/country/country.user.interface";
import { MaritalStatusPipe } from "../../pipes/marital.status.pipe";
import { CurrencyPipe } from "@angular/common";
import { ICountry } from "../../interfaces/country/countries.interface";

@Component({
  selector: "app-general-informations",
  templateUrl: "./general-informations.component.html",
  imports: [UserInfoItem, MaritalStatusPipe, CurrencyPipe],
})
export class GeneralInformationsComponent {
  @Input({ required: true }) user: ICountryUserInterface =
    {} as ICountryUserInterface;
}
