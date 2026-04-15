import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { GeneralInformationsComponent } from "../general-informations/general-informations.component";
import { CountryContactInformation } from "../country-contact-information/country-contact-information";
import { CountryDependessesList } from "../country-dependesses-list/country-dependesses-list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { ICountryUserInterface } from "../../interfaces/country/country.user.interface";
import { DependentsListEdit } from "../dependents-list-edit/dependents-list-edit";
import { ContactInformationsEditComponent } from "../contact-informations-edit/contact-informations-edit.component";
import { GeneralInformationsEditComponent } from "../general-informations-edit/general-informations-edit.component";
import { UserFormController } from "./user-form-controller";

@Component({
  selector: "app-user-information-container",
  imports: [
    GeneralInformationsComponent,
    CountryContactInformation,
    CountryDependessesList,
    MatCardModule,
    MatTabsModule,
    DependentsListEdit,
    ContactInformationsEditComponent,
    GeneralInformationsEditComponent,
  ],
  templateUrl: "./user-information-container.html",
})
export class UserInformationContainer
  extends UserFormController
  implements OnChanges
{
  @Input({ required: true }) user: ICountryUserInterface =
    {} as ICountryUserInterface;
  @Input({ required: true }) currentTab: number = 1;
  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.currentTab = 0;
    const hasUserSelected =
      changes["user"] && Object.keys(changes["user"].currentValue).length > 0;
    if (hasUserSelected) {
      this.fulfillUserForm(changes["user"].currentValue);
    }
  }
}
