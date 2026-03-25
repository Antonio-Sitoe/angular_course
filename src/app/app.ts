import { Component } from "@angular/core";
import { AppControlForm } from "./components/app-control-form/app-control-form";

@Component({
  selector: "app-root",
  imports: [AppControlForm],
  templateUrl: "./app.html",
})
export class App {}
