import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxMaskDirective } from "ngx-mask";

@Component({
  selector: "app-phone-list-edit",
  imports: [MatFormFieldModule, MatInputModule, NgxMaskDirective, FormsModule],
  templateUrl: "./phone-list-edit.html",
})
export class PhoneListEdit {
  @Input({ required: true }) userForm!: FormGroup;
}
