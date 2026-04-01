import { Component } from "@angular/core";
import { FormPeopleController } from "./form-people-controller";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-form-builder-external",
  imports: [],
  templateUrl: "./form-builder-external.html",
  styleUrl: "./form-builder-external.css",
})
export class FormBuilderExternal extends FormPeopleController {
  constructor(readonly _fb: FormBuilder) {
    super(_fb);
  }
}
