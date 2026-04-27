import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CanActivateFn } from "@angular/router";
import { catchError, map } from "rxjs";
import { GuardResult, MaybeAsync, Router } from "@angular/router";

export const authWithScopesGuard = (scope: string): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.verifyToken().pipe(
      catchError(() => router.navigate(["login"])),
      map(() => {
        const scopes = authService.getUserScopes();
        if (!scopes.includes(scope)) {
          router.navigate(["not-authorized"]);
          return false;
        }
        return true;
      })
    );
  };
};
