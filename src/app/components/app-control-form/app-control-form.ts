import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  imports: [],
  selector: "app-app-control-form",
  templateUrl: "./app-control-form.html",
})
export class AppControlForm {
  form = new FormGroup({
    nome: new FormControl("sdsd", [
      Validators.required,
      Validators.minLength(6),
    ]),
    age: new FormControl("", [Validators.required, Validators.min(18)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    adress: new FormGroup({
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
    }),
  });

  constructor() {
    console.log(this.form);
  }

  alterarValor() {}

  get nome() {
    return this.form.get("nome")?.value;
  }
  get email() {
    return this.form.get("email")?.value;
  }
  get age() {
    return this.form.get("age")?.value;
  }
  get city() {
    return this.form.get("adress")?.get("city")?.value;
  }
  get state() {
    return this.form.get("adress")?.get("state")?.value;
  }
}
