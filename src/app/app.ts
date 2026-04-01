import { Component } from "@angular/core";
import { FormBuilderComponent } from "./components/form-builder-component/form-builder-component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [FormBuilderComponent, ReactiveFormsModule],
  templateUrl: "./app.html",
})
export class App {}
