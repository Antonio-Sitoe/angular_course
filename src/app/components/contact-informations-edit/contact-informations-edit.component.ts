import { Component } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-contact-informations-edit",
  templateUrl: "./contact-informations-edit.component.html",
  styleUrl: "./contact-informations-edit.component.scss",
  imports: [MatFormFieldModule, MatInputModule],
})
export class ContactInformationsEditComponent {}
