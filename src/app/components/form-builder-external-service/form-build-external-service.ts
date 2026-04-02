import { Injectable } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class FormBuildExternalService {
  form!: FormGroup;
  constructor(private readonly _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      idade: ["", [Validators.required, Validators.min(0)]],
      endereco: this._formBuilder.group({
        rua: ["", [Validators.required]],
        cidade: ["", [Validators.required]],
      }),
      musicas: this._formBuilder.array([
        this._formBuilder.group({
          titulo: ["", [Validators.required]],
        }),
      ]),
    });
  }

  get nomeControl() {
    return this.form.get("nome") as FormControl;
  }
}
