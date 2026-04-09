import { Component, OnInit, signal } from '@angular/core';
import { FormBuilderComponent } from './components/form-builder-component/form-builder-component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CountryService } from './services/countries.service';
import { map, take } from 'rxjs';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import {
  ICountryUserInterface,
  ICountryUserListResponse,
} from './interfaces/country/country.user.interface';
import { UsersService } from './services/users.service';
import { GeneralComponent } from './components/general-component/general-component';
import { GeneralInformationsComponent } from './components/general-informations/general-informations.component';
import { CountryContactInformation } from './components/country-contact-information/country-contact-information';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    UsersListComponent,
    MatTabsModule,
    GeneralInformationsComponent,
    CountryContactInformation,
  ],
  templateUrl: './app.html',
})
export class App implements OnInit {
  currentTab = 1;
  readonly usersList = signal<ICountryUserListResponse>([]);
  constructor(
    private readonly _countryService: CountryService,
    private readonly _statesService: StatesService,
    private readonly _cityService: CitiesService,
    private readonly _usersService: UsersService,
  ) {}

  ngOnInit() {
    this._countryService.getCountries().subscribe({
      next: (countries: any) => {
        console.log(countries);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
    this._statesService.getStates('Brazil').subscribe({
      next: (states: any) => {
        console.log(states);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });

    this._cityService.getCities({ country: 'Brazil', state: 'São Paulo' }).subscribe({
      next: (cities: any) => {
        console.log(cities);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });

    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe({
        next: (users: any) => {
          console.log(users);
          this.usersList.set(users);
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }
}
