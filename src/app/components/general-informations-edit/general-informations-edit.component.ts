import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from "@angular/material/autocomplete";
import { ICountry } from "../../interfaces/country/countries.interface";
import { ICountryStateListResponse } from "../../interfaces/state.interface";
import { MARITAL_STATUS_OPTIONS } from "../../utils/marital-status-description-map";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";

@Component({
  selector: "app-general-informations-edit",
  templateUrl: "./general-informations-edit.component.html",
  providers: [provideNgxMask()],
  imports: [
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    ɵInternalFormsSharedModule,
    NgxMaskDirective,
  ],
})
export class GeneralInformationsEditComponent implements OnInit {
  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countryList: ICountry[] = [];
  @Input({ required: true }) states: ICountryStateListResponse = [];
  readonly maritalStatusOptions = MARITAL_STATUS_OPTIONS;

  @Output() onCountrySelectedEmmit = new EventEmitter<string>();

  countriesListFiltered: ICountry[] = [];
  statesListFiltered: ICountryStateListResponse = [];

  get emailControl(): FormControl {
    return this.userForm.get("generalInformations.email") as FormControl;
  }
  get countryControl(): FormControl {
    return this.userForm.get("generalInformations.country") as FormControl;
  }
  get stateControl(): FormControl {
    return this.userForm.get("generalInformations.state") as FormControl;
  }

  private watchCountryChanges() {
    this.countryControl?.valueChanges.subscribe(
      this.filterCountries.bind(this)
    );
  }

  private filterCountries(value: string) {
    const filterValue = value.toLowerCase().trim();
    this.countriesListFiltered = this.countryList?.filter((country) =>
      country.name.toLowerCase().trim().includes(filterValue)
    );
  }

  private stateWacthFilter() {
    this.stateControl?.valueChanges.subscribe(this.filterStates.bind(this));
  }

  private filterStates(value: string) {
    const filterValue = value.toLowerCase().trim();
    this.statesListFiltered = this.states.filter((state) => {
      return state.name.toLowerCase().trim().includes(filterValue);
    });
  }

  onCountrySelected({ option }: MatAutocompleteSelectedEvent) {
    const value = option.value;
    this.onCountrySelectedEmmit.emit(value);
  }

  ngOnInit(): void {
    this.watchCountryChanges();
    this.stateWacthFilter();
  }
}
