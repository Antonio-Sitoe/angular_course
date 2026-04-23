import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UsersServiceRouter } from "../../../../services/users.router.service";
import { CardComponent } from "../../../../components/ui/card/card";
import { Tabs } from "../../../ui/tabs/tabs";
import { Tab } from "../../../ui/tabs/tab";
import { Button } from "../../../card/button/button";
import { UserTodos } from "../user-todos/user-todos";
import { UserAlbunsComponent } from "../user-albuns/user-albuns";
import { UserPost } from "../user-post/user-post";

@Component({
  selector: "app-user-detail-component",
  imports: [
    CommonModule,
    CardComponent,
    Tabs,
    Tab,
    Button,
    RouterLink,
    UserTodos,
    UserAlbunsComponent,
    UserPost,
  ],
  templateUrl: "./user-detail-component.html",
  styleUrl: "./user-detail-component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly usersService = inject(UsersServiceRouter);

  readonly user = signal<any>(null);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadUser();
  }

  private loadUser(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) {
      this.error.set("ID do usuário não fornecido");
      this.isLoading.set(false);
      return;
    }

    this.usersService.getUsers().subscribe({
      next: (users: any) => {
        const foundUser = users.find((u: any) => u.id === parseInt(id));
        if (foundUser) {
          this.user.set(foundUser);
        } else {
          this.error.set("Usuário não encontrado");
        }
        this.isLoading.set(false);
      },
      error: (err: any) => {
        this.error.set("Erro ao carregar dados do usuário");
        console.error(err);
        this.isLoading.set(false);
      },
    });
  }

  goBack(): void {
    this.router.navigate(["/users"]);
  }
}
