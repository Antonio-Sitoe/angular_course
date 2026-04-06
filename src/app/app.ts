import { Component, OnInit } from "@angular/core";
import { FormBuilderComponent } from "./components/form-builder-component/form-builder-component";
import { ReactiveFormsModule } from "@angular/forms";
import { CountryService } from "./services/countries.service";
import { map } from "rxjs";
import { StatesService } from "./services/states.service";
import { CitiesService } from "./services/cities.service";

@Component({
  selector: "app-root",
  imports: [FormBuilderComponent, ReactiveFormsModule],
  templateUrl: "./app.html",
})
export class App implements OnInit {
  constructor(
    private readonly _countryService: CountryService,
    private readonly _statesService: StatesService,
    private readonly _cityService: CitiesService
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
        console.log("Complete");
      },
    });
    this._statesService.getStates("Brazil").subscribe({
      next: (states: any) => {
        console.log(states);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log("Complete");
      },
    });

    this._cityService
      .getCities({ country: "Brazil", state: "São Paulo" })
      .subscribe({
        next: (cities: any) => {
          console.log(cities);
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log("Complete");
        },
      });
  }
}
