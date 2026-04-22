import { Routes } from "@angular/router";
import { AppInitialComponent } from "./components/desafio-router/components/initial/app-initial";
import { General } from "./components/desafio-router/components/general/general";
import { AddressComponent } from "./components/desafio-router/components/general/components/address/address";
import { ContactComponent } from "./components/desafio-router/components/general/components/contact-component/contact-component";
import { BasicComponent } from "./components/desafio-router/components/general/components/basic-component/basic-component";
import { Transations } from "./components/desafio-router/components/transations/transations";
import { Credit } from "./components/desafio-router/components/transations/components/credit/credit";
import { Debit } from "./components/desafio-router/components/transations/components/debit/debit";
import { NotFound } from "./components/desafio-router/components/not-found/not-found";

export const routes: Routes = [
  {
    path: "",
    title: "Pagina inicial",
    component: AppInitialComponent,
  },

  {
    path: "transactions",
    component: Transations,
    children: [
      {
        path: "credit",
        component: Credit,
      },
      {
        path: "debit",
        component: Debit,
      },
      {
        path: "",
        redirectTo: "credit",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "general",
    component: General,
    title: "Conteudo geral",
    children: [
      {
        path: "basic",
        component: BasicComponent,
      },
      {
        path: "contact",
        title: "Contact",
        component: ContactComponent,
      },
      {
        path: "address",
        title: "Address",
        component: AddressComponent,
      },

      {
        path: "",
        redirectTo: "basic",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "**",
    component: NotFound,
  },
];
