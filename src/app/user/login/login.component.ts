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
    // Do if your are calling backend server for authentication
   /* if (this.isAdminLogin) {
      if (this.loginService.loginUser("Admin", formValues.userName , formValues.password)){
        this.router.navigate(["/admin"]);
      }else{
        this.invalidCredentials=true;
      }
    } else {
      this.loginService.loginUser("Customer", formValues.userName , formValues.password)
      .subscribe(res=>{
          this.loginService.currentUser=res.json();
          let name = res.json().name;
          this.router.navigate(["/Home"]);
          alert("welcome "+name+" !");
          console.log(res);
      },err=>{
          alert("Invalid Credentials");
          console.log(err);
      });
    }*/

    if (this.isAdminLogin) {
      if(formValues.userName == 'kiran' && formValues.password == 'arun'){
        this.router.navigate(["/admin"]);
        this.loginService.currentUser= {  name:"KiranKumar Venkatesh",
                                          userType:"customer",
                                          userName:"kiranvgk",
                                          firstName:"KiranKumar",
                                          lastName:"Venkatesh" 
                                        };
      }else{
        this.invalidCredentials=true;
      }
    }else{
      if(formValues.userName == 'arun' && formValues.password == 'kiran'){
        this.loginService.currentUser= {  name:"ArunKumar Venkatesh",
                                          userType:"customer",
                                          userName:"arunkvgk",
                                          firstName:"ArunKumar",
                                          lastName:"Venkatesh" 
                                        };
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
