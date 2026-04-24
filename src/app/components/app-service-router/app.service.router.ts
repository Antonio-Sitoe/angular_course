import { inject } from "@angular/core";
import { Component } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";

@Component({
  selector: "app-app-service-router",
  templateUrl: "./app.service.router.html",
  styleUrl: "./app.service.router.css",
  imports: [RouterOutlet],
})
export class AppServiceRouterComponent {
  private readonly router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
