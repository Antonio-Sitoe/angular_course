import { IGenreResponse } from "../../interfaces/genre.interface";
import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { IUserForm } from "../../interfaces/user/user.interface";
import { IStateListResponse } from "../../interfaces/state.interface";
import { FormsModule } from "@angular/forms";
import { AppCredentioalValidator } from "../../directivas/app-credentioal-validator";
import { ProgressComponent } from "../progressBar/progress.component";
import { getPasswordStrengthValue } from "../../utils/get-password-strength-value";

@Component({
  selector: "app-user-form",
  imports: [FormsModule, AppCredentioalValidator, ProgressComponent],
  templateUrl: "./user-form.html",
})
export class UserForm implements OnInit, OnChanges {
  @Input() genderList: IGenreResponse = [];
  @Input() stateList: IStateListResponse = [];
  @Input() userSelected: IUserForm = {} as IUserForm;
  passwordStrengtValue = 0;

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

  onPasswordChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log("Password changed:", value);
    this.passwordStrengtValue = getPasswordStrengthValue(value);
  }
}
