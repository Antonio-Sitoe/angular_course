import { Component, Input } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dependents-list-edit",
  imports: [MatInputModule],
  templateUrl: "./dependents-list-edit.html",
})
export class DependentsListEdit {
  @Input({ required: true }) userForm!: FormGroup;
}
