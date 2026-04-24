import { Routes } from "@angular/router";
import { AppCredit } from "../app-credit/app-credit";
import { AppDebit } from "../app-debit/app-debit";
import { Cards } from "./cards";

export const cardsRoutes: Routes = [
  {
    path: "",
    component: Cards,
    children: [
      {
        path: "",
        redirectTo: "debit",
        pathMatch: "full",
      },
      {
        path: "debit",
        component: AppDebit,
      },
      {
        path: "credit",
        component: AppCredit,
      },
    ],
  },
];
