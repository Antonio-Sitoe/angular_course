import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { GeneralInformationsComponent } from "../general-informations/general-informations.component";
import { CountryContactInformation } from "../country-contact-information/country-contact-information";
import { CountryDependessesList } from "../country-dependesses-list/country-dependesses-list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { ICountryUserInterface } from "../../interfaces/country/country.user.interface";

@Component({
  selector: "app-user-information-container",
  imports: [
    GeneralInformationsComponent,
    CountryContactInformation,
    CountryDependessesList,
    MatCardModule,
    MatTabsModule,
  ],
  templateUrl: "./user-information-container.html",
})
export class UserInformationContainer implements OnChanges {
  @Input({ required: true }) user: ICountryUserInterface =
    {} as ICountryUserInterface;
  @Input({ required: true }) currentTab: number = 1;
  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.currentTab = 0;
  }
}
