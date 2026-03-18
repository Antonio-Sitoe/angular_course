import { Component, OnInit, signal } from "@angular/core";
import { IUserForm, IUserList } from "../../interfaces/user/user.interface";
import { GenresService } from "../../services/genres.service";
import { UsersCardList } from "../../components/users-card-list/users-card-list";
import { UsersService } from "../../services/users.service";
import { UserForm } from "../../components/user-form/user-form";
import { IGenreResponse } from "../../interfaces/genre.interface";
import { IStateListResponse } from "../../interfaces/state.interface";
import { BrazilianStatesService } from "../../services/brazilian.states.service";

@Component({
  selector: "app-root",
  imports: [UsersCardList, UserForm],
  templateUrl: "./app.html",
})
export class App implements OnInit {
  readonly users = signal<IUserList>([]);
  readonly genres = signal<IGenreResponse>([]);
  readonly states = signal<IStateListResponse>([]);
  userSelectedId = signal<number | null>(null);
  userSelected = signal<IUserForm | null>(null);

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService
  ) {}

  onUserSelected(id: number) {
    this.userSelectedId.set(id);
    const user = this.users().find((user) => user.id === id);
    if (user) this.userSelected.set(structuredClone(user));
  }

  getUsers() {
    this._usersService.getUsers().subscribe((users) => {
      console.log("Fetched users:", users);
      this.users.set(users);
    });
  }

  getGenres() {
    this._genresService.getGenres().subscribe((genres) => {
      console.log("Fetched genres:", genres);
      this.genres.set(genres);
    });
  }

  getStates() {
    this._brazilianStatesService.getStates().subscribe((states) => {
      console.log("Fetched states:", states);
      this.states.set(states);
    });
  }

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  get usersList() {
    return this.users();
  }

  get selectedUser(): IUserForm {
    const user = this.userSelected();
    if (user) {
      return user;
    } else {
      return {} as IUserForm;
    }
  }
}
