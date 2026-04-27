import { Routes } from "@angular/router";
import { Login } from "./components/login/login";
import { Admin } from "./components/admin/admin";
import { Debit } from "./components/debit/debit";
import { Credit } from "./components/credit/credit";
import { Payments } from "./components/payments/payments";
import { Dashboard } from "./components/dashboard/dashboard";
import { NotAuthorized } from "./components/not-authorized/not-authorized";
import { GeneralComponent } from "./components/general.component/general.component";
import { authGuard } from "./guards/auth.guard-guard";
import { scopesGuard } from "./guards/scopes-guard";
import { authWithScopesGuard } from "./guards/auth-with-scopes-guard";
import { walletGuard } from "./guards/wallet-guard";

export const appRoutesGuards: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "dashboard",
    component: Dashboard,
    canActivate: [authWithScopesGuard("dashboard")],
    canActivateChild: [authGuard()],
    children: [
      {
        path: "",
        redirectTo: "general",
        pathMatch: "full",
      },
      {
        path: "general",
        component: GeneralComponent,
      },
      {
        path: "payment",
        component: Payments,
        canActivate: [scopesGuard("pagamentos")],
        children: [
          {
            path: "debit",
            component: Debit,
            canActivate: [walletGuard()],
          },
          {
            path: "credit",
            component: Credit,
            canActivate: [walletGuard()],
          },
        ],
      },
      {
        path: "admin",
        component: Admin,
        canActivate: [scopesGuard("admin")],
      },
    ],
  },
  {
    path: "not-authorized",
    component: NotAuthorized,
    data: {
      type: "not-authorized",
    },
  },
  {
    path: "not-found",
    component: NotAuthorized,
    data: {
      type: "not-found",
    },
  },
];
