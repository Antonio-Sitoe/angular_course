import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-form",
  imports: [FormsModule],
  templateUrl: "./form.html",
  styleUrl: "./form.css",
})
export class Form {
  ngForm: any;
  onSubmit(form: any) {
    console.log("Form submitted:", form.value);
  }
}
