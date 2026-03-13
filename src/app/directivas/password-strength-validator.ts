import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

import zxcvbn from "zxcvbn";

@Directive({
  selector: "[appPasswordStrengthValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidator,
      multi: true,
    },
  ],
})
export class PasswordStrengthValidator implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) {
      return null;
    }
    const password = control.value;
    const result = zxcvbn(password);

    if (result.score < 3) {
      return { invalidPasswordStrength: true };
    }

    return null;
  }
}
