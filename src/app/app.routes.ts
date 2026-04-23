import { Routes } from "@angular/router";
import { NotFound } from "./components/desafio-router/components/not-found/not-found";
import { UserListComponent } from "./components/app-user-visualizer/components/user-list/user-list";
import { UserAlbunsComponent } from "./components/app-user-visualizer/components/user-albuns/user-albuns";
import { UserDetailComponent } from "./components/app-user-visualizer/components/user-detail-component/user-detail-component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full",
  },
  {
    path: "users",
    title: "Lista de Usuários",
    component: UserListComponent,
  },
  {
    path: "users/:id",
    title: "Detalhes do Usuário",
    component: UserDetailComponent,
  },
  {
    path: "albuns",
    title: "Lista de Álbuns",
    component: UserAlbunsComponent,
  },
  {
    path: "**",
    component: NotFound,
  },
];
