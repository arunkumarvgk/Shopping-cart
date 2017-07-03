import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "app/user/login/login.service";

@Injectable()
export class ProfileGuardService implements CanActivate{

    constructor(public loginService:LoginService){}

    canActivate(){
        return this.loginService.isAuthenticated();
    }
}

