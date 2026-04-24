import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-cards",
  imports: [RouterOutlet],
  templateUrl: "./cards.html",
  styleUrl: "./cards.css",
})
export class Cards {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  navigateTo(route: string): void {
    this.router.navigate([
      route,
      {
        relativeTo: this.activatedRoute,
      },
    ]);
  }
}
