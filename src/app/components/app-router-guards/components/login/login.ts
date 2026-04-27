import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  onLogin() {
    this._authService
      .login(this.form.value.username, this.form.value.password)
      .subscribe({
        next: (response) => {
          console.log("Login successful:", response);
          this._router.navigate(["/dashboard"]);
        },
        error: (error) => {
          console.error("Login failed:", error);
          const UNOUTHORIZED = 401;
          if (error.status === UNOUTHORIZED) {
            this.form.setErrors({ invalidCredentials: true });
          } else {
            this.form.setErrors({ unexpectedError: true });
          }
        },
      });
  }
}
