import { Component } from "@angular/core";
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
} from "@angular/router";

@Component({
  selector: "app-general",
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: "./general.html",
  styleUrl: "./general.css",
})
export class General {}
