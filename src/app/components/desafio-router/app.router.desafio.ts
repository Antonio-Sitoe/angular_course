import { Routes } from "@angular/router";
import { AppInitialComponent } from "./components/initial/app-initial";
import { General } from "./components/general/general";
import { AddressComponent } from "./components/general/components/address/address";
import { ContactComponent } from "./components/general/components/contact-component/contact-component";
import { BasicComponent } from "./components/general/components/basic-component/basic-component";
import { Transations } from "./components/transations/transations";
import { Credit } from "./components/transations/components/credit/credit";
import { Debit } from "./components/transations/components/debit/debit";
import { NotFound } from "./components/not-found/not-found";

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
