import { Routes } from "@angular/router";
import { NotFound } from "./components/desafio-router/components/not-found/not-found";
import { Initial } from "./components/app-service-router/components/initial/initial";
import { Contacts } from "./components/app-service-router/components/contacts/contacts";
import { AppServiceInformations } from "./components/app-service-router/components/app-service-informations/app-service-informations";
import { Cards } from "./components/app-service-router/components/cards/cards";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full",
  },
  {
    path: "initial",
    component: Initial,
  },
  {
    path: "contacts",
    component: Contacts,
  },
  {
    path: "informations",
    component: AppServiceInformations,
  },

  {
    path: "cards",
    component: Cards,
    pathMatch: "full",
    loadChildren: () =>
      import(
        "./components/app-service-router/components/cards/cards.routes"
      ).then((m) => m.cardsRoutes),
  },
  {
    path: "**",
    component: NotFound,
  },
];
