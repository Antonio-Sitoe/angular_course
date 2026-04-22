import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-initial",
  templateUrl: "./app-initial.html",
  styleUrl: "./app-initial.css",
  imports: [RouterLink],
})
export class AppInitialComponent {
  title = "desafio-router";
}
