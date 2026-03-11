import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUserList } from "../../interfaces/user/user.interface";

@Component({
  selector: "app-users-card-list",
  templateUrl: "./users-card-list.html",
  imports: [],
})
export class UsersCardList {
  @Input() users: IUserList = [];
  @Output() onUserSelectedEmmiter = new EventEmitter<number>();

  onUserSelected(id: number) {
    this.onUserSelectedEmmiter.emit(id);
  }
}
