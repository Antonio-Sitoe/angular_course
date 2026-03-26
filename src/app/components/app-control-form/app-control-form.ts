import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-app-control-form",
  imports: [],
  templateUrl: "./app-control-form.html",
  styleUrl: "./app-control-form.css",
})
export class AppControlForm {
  nome = new FormControl("", [Validators.required, Validators.minLength(6)]);

  alterarValor() {
    this.nome.setValue("Novo valor");
  }
}
