import { Component, OnInit, signal } from "@angular/core";
import { FormBuilderComponent } from "./components/form-builder-component/form-builder-component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { CountryService } from "./services/countries.service";
import { map, take } from "rxjs";
import { StatesService } from "./services/states.service";
import { CitiesService } from "./services/cities.service";
import { UsersListComponent } from "./components/users-list/users-list.component";
import {
  ICountryUserInterface,
  ICountryUserListResponse,
} from "./interfaces/country/country.user.interface";
import { UsersService } from "./services/users.service";

import { ButtonContainerComponent } from "./components/buttons-container/button-container";
import { UserInformationContainer } from "./components/user-information-container/user-information-container";

@Component({
  selector: "app-root",
  imports: [
    MatCardModule,
    MatTabsModule,
    UsersListComponent,
    ReactiveFormsModule,
    ButtonContainerComponent,
    UserInformationContainer,
  ],
  templateUrl: "./app.html",
})
export class App implements OnInit {
  currentTab = 1;
  isInEditMode = false;
  readonly usersList = signal<ICountryUserListResponse>([]);
  readonly selectedUser = signal<ICountryUserInterface | null>(null);
  constructor(
    private readonly _countryService: CountryService,
    private readonly _statesService: StatesService,
    private readonly _cityService: CitiesService,
    private readonly _usersService: UsersService
  ) {}

  onUserSelected(user: ICountryUserInterface) {
    this.selectedUser.set(user);
  }

  ngOnInit() {
    this._countryService.getCountries().subscribe();
    this._statesService.getStates("Brazil").subscribe();
    this._cityService
      .getCities({ country: "Brazil", state: "São Paulo" })
      .subscribe();

    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe({
        next: (users: any) => {
          this.usersList.set(users);
          this.selectedUser.set(users?.[0] ?? null);
        },
      });
  }

  onSaveButton() {
    console.log("Save button clicked");
  }
  onEditButton() {}

  onCancelButton() {}
}
