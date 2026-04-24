import { Routes } from "@angular/router";
import { NotFound } from "../desafio-router/components/not-found/not-found";
import { UserListComponent } from "./components/user-list/user-list";
import { UserAlbunsComponent } from "./components/user-albuns/user-albuns";
import { UserDetailComponent } from "./components/user-detail-component/user-detail-component";
import { UserTodos } from "./components/user-todos/user-todos";
import { PostDetails } from "./components/post-details/post-details";
import { UserPost } from "./components/user-post/user-post";

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
    children: [
      {
        path: "todos",
        title: "Todos do Usuário",
        component: UserTodos,
      },
      {
        path: "albuns",
        title: "Álbuns do Usuário",
        component: UserAlbunsComponent,
      },
      {
        path: "posts",
        title: "Posts do Usuário",
        component: UserPost,
        children: [
          {
            path: ":postId",
            title: "Detalhe do Post",
            component: PostDetails,
          },
        ],
      },
    ],
  },
  {
    path: "**",
    component: NotFound,
  },
];
