import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormPeopleController {
  pessoaForm!: FormGroup;
  constructor(private readonly _formBuilder: FormBuilder) {
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
