import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-builder-component",
  imports: [],
  templateUrl: "./form-builder-component.html",
})
export class FormBuilderComponent implements OnInit {
  pessoaForm!: FormGroup;
  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.pessoaForm = this._formBuilder.group({
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
}
