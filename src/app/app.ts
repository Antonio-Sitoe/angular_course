import { Component } from "@angular/core";
import { AppRouterGuardsComponent } from "./components/app-router-guards/app-router-guards";

@Component({
  selector: "app-root",
  imports: [AppRouterGuardsComponent],
  templateUrl: "./app.html",
})
export class App {}
