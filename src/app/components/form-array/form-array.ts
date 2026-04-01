import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-form-array",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./form-array.html",
})
export class FormArrayComponent {
  musicsForm = new FormGroup({
    musics: new FormArray([
      new FormGroup({
        name: new FormControl("Bohemian Rhapsody - Queen", Validators.required),
      }),
    ]),
  });

  get musics(): FormArray {
    return this.musicsForm.get("musics") as FormArray;
  }

  adicionarItem() {
    this.musics.push(
      new FormGroup({
        name: new FormControl("", Validators.required),
      })
    );
  }

  removerItem(index: number) {
    this.musics.removeAt(index);
  }

  adicionarItemOnEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.adicionarItem();
    }
  }

  submit() {
    console.log(this.musicsForm.value);
  }
}
