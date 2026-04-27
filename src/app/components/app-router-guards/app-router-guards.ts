import { Component, inject } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-app-router-guards",
  templateUrl: "./app-router-guards.html",
  styleUrls: ["./app-router-guards.css"],
})
export class AppRouterGuardsComponent {
  private readonly _authService = inject(AuthService);

  login() {
    this._authService.login("user", "user").subscribe({
      next: (response) => {
        console.log("Login successful:", response);
      },
      error: (error) => {
        console.error("Login failed:", error);
      },
    });
  }

  Scopes() {
    const scopes = this._authService.getUserScopes();
    console.log("User scopes:", scopes);
  }

  Verify() {
    this._authService.verifyToken().subscribe({
      next: (response) => {
        console.log("Token verification successful:", response);
      },
      error: (error) => {
        console.error("Token verification failed:", error);
      },
    });
  }
}
