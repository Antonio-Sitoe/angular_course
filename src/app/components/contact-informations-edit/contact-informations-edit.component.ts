import { Component, Input } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PhoneListEdit } from "./components/phone-list-edit/phone-list-edit";
import { AdressListEdit } from "./components/adress-list-edit/adress-list-edit";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-contact-informations-edit",
  templateUrl: "./contact-informations-edit.component.html",
  imports: [MatFormFieldModule, MatInputModule, PhoneListEdit, AdressListEdit],
})
export class ContactInformationsEditComponent {
  @Input({ required: true }) userForm!: FormGroup;
}
