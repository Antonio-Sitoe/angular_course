import { IGenreResponse } from "../../interfaces/genre.interface";
import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { IUserForm } from "../../interfaces/user/user.interface";
import { IStateListResponse } from "../../interfaces/state.interface";

@Component({
  selector: "app-user-form",
  imports: [],
  templateUrl: "./user-form.html",
})
export class UserForm implements OnInit, OnChanges {
  @Input() genderList: IGenreResponse = [];
  @Input() stateList: IStateListResponse = [];
  @Input() userSelected: IUserForm | null = null;

  ngOnChanges() {
    console.log(
      "UserForm ngOnChanges triggered with userSelected:",
      this.userSelected
    );
  }

  ngOnInit() {
    console.log(
      "UserForm ngOnInit triggered with userSelected:",
      this.userSelected
    );
  }
}
