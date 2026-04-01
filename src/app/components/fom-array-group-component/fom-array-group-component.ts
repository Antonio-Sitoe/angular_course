import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-fom-array-group-component",
  imports: [ReactiveFormsModule],
  templateUrl: "./fom-array-group-component.html",
})
export class FomArrayGroupComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormGroup({
        titulo: new FormControl("", [Validators.required]),
        banda: new FormControl("", [Validators.required]),
      }),
    ]),
  });

  constructor() {
    console.log(this.musicasForm.value);
  }

  get musicas() {
    return this.musicasForm.get("musicas") as FormArray;
  }

  adicionarItem() {
    this.musicas.push(
      new FormGroup({
        titulo: new FormControl("", [Validators.required]),
        banda: new FormControl("", [Validators.required]),
      })
    );
  }

  adicionarItemOnEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.adicionarItem();
    }
  }

  removerItem(index: number) {
    (this.musicas as FormArray).removeAt(index);
  }
}
