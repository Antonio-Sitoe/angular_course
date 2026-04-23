import { Component, inject, OnInit } from "@angular/core";
import { UserListService } from "../../services/user.list.service";
import { Observable, of } from "rxjs";
import { IUser } from "../../interface/user.interface";
import { CardComponent } from "../../../ui/card";
import { AsyncPipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  imports: [CardComponent, AsyncPipe],
  templateUrl: "./user-list.html",
  styleUrl: "./user-list.css",
})
export class UserListComponent implements OnInit {
  userList$: Observable<IUser[]> = of([]);

  private router = inject(Router);

  private readonly _userListService = inject(UserListService);

  ngOnInit(): void {
    this.userList$ = this._userListService.getUsers();
  }

  onUserActionClick(userId: number): void {
    this.router.navigate([`/users/${userId}`]);
  }
}
