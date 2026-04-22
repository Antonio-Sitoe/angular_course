import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-transations",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./transations.html",
  styleUrl: "./transations.css",
})
export class Transations {}
