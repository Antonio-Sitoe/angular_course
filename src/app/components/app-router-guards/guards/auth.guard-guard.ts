import {
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
} from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { catchError, map } from "rxjs";

export const authGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.verifyToken().pipe(
      catchError(() => router.navigate(["login"])),
      map(() => true)
    );
  };
};
