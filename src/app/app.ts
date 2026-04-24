import { Component } from "@angular/core";
import { AppServiceRouterComponent } from "./components/app-service-router/app.service.router";

@Component({
  selector: "app-root",
  imports: [AppServiceRouterComponent],
  templateUrl: "./app.html",
})
export class App {}
