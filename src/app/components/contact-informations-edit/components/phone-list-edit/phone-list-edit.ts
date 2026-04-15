import { Component } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-phone-list-edit",
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: "./phone-list-edit.html",
})
export class PhoneListEdit {}
