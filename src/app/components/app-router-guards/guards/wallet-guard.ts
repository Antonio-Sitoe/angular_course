import { CanActivateFn } from "@angular/router";

import { GuardResult, MaybeAsync } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const walletGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);
    const walletStatus = authService.getUserWalletStatus();
    if (walletStatus !== "active") {
      return true;
    }
    return false;
  };
};
