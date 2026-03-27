import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  imports: [],
  selector: "app-app-control-form",
  templateUrl: "./app-control-form.html",
})
export class AppControlForm {
  nome = new FormControl("", [Validators.required, Validators.minLength(6)]);

  alterarValor() {}
}
