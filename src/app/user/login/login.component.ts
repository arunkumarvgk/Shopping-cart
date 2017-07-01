import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "app/user/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [`
          .loginContainer { padding-top:60px; }
          em { float:right;color:#E05C65;padding-left:10px;}
    `]
})
export class LoginComponent implements OnInit, OnChanges {

  isAdminLogin: boolean = false;
  isUserRegister: boolean = false;
  userName: string;
  password: string;
  passwordEye: boolean = true;
  invalidCredentials: boolean=false;
  
  constructor(public router: Router , public loginService: LoginService) {
    console.log("called");
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Logging");
  }

  login(formValues) {
    if (this.isAdminLogin) {
      if (this.loginService.loginUser("Admin", formValues.userName , formValues.password)){
        this.router.navigate(["/Home"]);
      }else{
        this.invalidCredentials=true;
      }
    } else {
      if (this.loginService.loginUser("Customer", formValues.userName , formValues.password)){
        this.router.navigate(["/Home"]);
      }else{
        this.invalidCredentials=true;
      }
    }
  }

  cancle() {
    this.router.navigate(["/Home"]); // Route via code
  }

}
