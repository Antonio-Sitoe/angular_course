import { Component } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-adress-list-edit",
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: "./adress-list-edit.html",
})
export class AdressListEdit {}
