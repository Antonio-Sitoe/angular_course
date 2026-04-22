import { Component } from "@angular/core";
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
} from "@angular/router";

@Component({
  selector: "app-desafio",
  templateUrl: "./app-desafio.html",
  styleUrl: "./app-desafio.css",
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
})
export class AppDesafioComponent {
  title = "desafio-router";
}
