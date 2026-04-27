import { CanActivateFn } from "@angular/router";

import { GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const scopesGuard = (scope: string): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const scopes = authService.getUserScopes();
    if (!scopes.includes(scope)) {
      router.navigate(["not-authorized"]);
      return false;
    }
    return true;
  };
};
