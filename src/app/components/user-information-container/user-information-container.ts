import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from "@angular/core";
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
import { ReactiveFormsModule } from "@angular/forms";
import { CountryService } from "../../services/countries.service";
import { take } from "rxjs";
import { ICountry } from "../../interfaces/country/countries.interface";
import { StatesService } from "../../services/states.service";
import { ICountryStateListResponse } from "../../interfaces/state.interface";

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
    ReactiveFormsModule,
  ],
  templateUrl: "./user-information-container.html",
})
export class UserInformationContainer
  extends UserFormController
  implements OnChanges, OnInit
{
  countryList = signal<ICountry[]>([]);
  states = signal<ICountryStateListResponse>([]);
  @Input({ required: true }) user: ICountryUserInterface =
    {} as ICountryUserInterface;
  @Input({ required: true }) currentTab: number = 1;
  @Input({ required: true }) isInEditMode: boolean = false;

  private readonly _countriesService = inject(CountryService);
  private readonly _statesService = inject(StatesService);

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentTab = 0;
    const hasUserSelected =
      changes["user"] && Object.keys(changes["user"].currentValue).length > 0;
    if (hasUserSelected) {
      this.fulfillUserForm(changes["user"].currentValue);
    }
  }

  getCountries() {
    this._countriesService
      .getCountries()
      .pipe(take(1))
      .subscribe((response) => {
        this.countryList.set(response);
      });
  }

  getStates(countryName: string) {
    this._statesService
      .getStates(countryName)
      .pipe(take(1))
      .subscribe((response) => {
        this.states.set(response);
      });
  }

  onCountrySelected(countryName: string) {
    this.getStates(countryName);
  }
}
