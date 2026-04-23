import { Component } from "@angular/core";
import { AppUserVisualizer } from "./components/app-user-visualizer/app.user.visualizer";

@Component({
  selector: "app-root",
  imports: [AppUserVisualizer],
  templateUrl: "./app.html",
})
export class App {}
