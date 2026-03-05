import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { AfterViewInit } from "@angular/core";
import { Form } from "./components/form/form";

@Component({
  selector: "app-root",
  imports: [FormsModule, Form],
  templateUrl: "./app.html",
})
export class App implements AfterViewInit {
  @ViewChild("meuInputFormControl") nameInput!: NgModel;

  name = "Angular";

  onChange(value: any) {
    console.log("Name changed:", value);
    this.name = value;
  }

  ngAfterViewInit() {
    console.log("Input element reference:", this.nameInput);
  }
}
