import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: "register-user",
  templateUrl: "./register-user.component.html",
  styles: [`
        register-user {padding-left : 150px;}
        em {float:right;color:#E05C65; padding-left:left;}
       .error input {background-color:#E3C366}
    `]
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  name: FormControl;
  email: FormControl;
  userName: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  @Output() onCancle : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.name = new FormControl("", [Validators.required, Validators.maxLength(25), this.validateName()]);
    this.email = new FormControl("", [Validators.required, this.validateCiscoEmailID()]);
    this.userName = new FormControl("", [Validators.required, Validators.maxLength(10), this.validateUserName()]);
    this.password = new FormControl("", [Validators.required]);
    this.confirmPassword = new FormControl("", [Validators.required, this.validateConfirmPassword()]);

    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      userName: this.userName,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  cancleRegistration() {
    return this.registerForm.valid ?
      (confirm("Form if filled want to cancle") ? this.onCancle.emit(false) : null)
      : this.onCancle.emit(false);
  }

  validateName() {
    return function(control: FormControl): { [key: string]: any } {
      const names: Array<string> = control.value.split(" ");

      const filteredNames = names.filter(function(word) {
        return word.length === 1;
      });

      return filteredNames && filteredNames.length > 0 ? { validateName: true } : null;

    }
  }

  validateCiscoEmailID() {
    return (control: FormControl): { [key: string]: any } => {
      const email: Array<string> = control.value.split(" ");

      if (email.length > 1) {
        return { "nospace": true };
      } else {
        return (email[0].length > 0 && !email[0].endsWith("@cisco.com")) ? { "shouldEndWithCisco": true } : null;
      }
    }
  }

  validateUserName() {
    return (control: FormControl): { [key: string]: any } => {
      return /\d/.test(control.value) ? { "shouldNotHaveNumbers": true } : null;
    }
  }

  validatePassword() {
    return (control: FormControl): { [key: string]: any } => {
      return /^(?:([A-Z])*([a-z])*(\d)*(\W)*){8,12}$/.test(control.value) ? null : { "pwNotMeetingCreiteriia": true };
    }
  }

  validateConfirmPassword() {
    return (control: FormControl): { [key: string]: any } => {
      const password: string = control.parent ? control.parent.value["password"] : "";
      const confirmPassword: string = control.value;

      return (confirmPassword.length > 0 && password !== confirmPassword) ? { "passwordMismatch": true } : null;
    }
  }
}
