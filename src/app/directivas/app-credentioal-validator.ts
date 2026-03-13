import { Directive, forwardRef, Input } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from "@angular/forms";
import { map, Observable } from "rxjs";
import { UserPlaceHolderService } from "../services/users-placeholder.service";

@Directive({
  selector: "[appCredentialsValidator]",
  providers: [
    {
      provide: "NG_VALIDATORS",
      useExisting: forwardRef(() => AppCredentioalValidator),
      multi: true,
    },
  ],
})
export class AppCredentioalValidator implements AsyncValidator {
  @Input("appCredentialsValidator") propToCheck: "username" | "email" =
    "username";
  constructor(
    private readonly _userPlaceholderService: UserPlaceHolderService
  ) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._userPlaceholderService.getUsers().pipe(
      map((users) => {
        const hasUser = users.some(
          (user: any) =>
            user[this.propToCheck].toLowerCase() === control.value.toLowerCase()
        );
        const validatorKey =
          this.propToCheck === "username" ? "invalidUsername" : "invalidEmail";
        return hasUser ? { [validatorKey]: true } : null;
      })
    );
  }
}
