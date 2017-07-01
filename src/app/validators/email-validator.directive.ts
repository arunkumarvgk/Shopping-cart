import { Directive, forwardRef } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[emailValidator][formControlName], [emailValidator][formControl],[emailValidator][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {

    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return EMAIL_REGEXP.test(c.value) ? null : {
      emailValidator: { valid: false }

    }
  }

}
