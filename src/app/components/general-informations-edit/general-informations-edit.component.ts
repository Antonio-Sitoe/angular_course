import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: "app-general-informations-edit",
  templateUrl: "./general-informations-edit.component.html",
  imports: [
    NgFor,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
})
export class GeneralInformationsEditComponent {}
