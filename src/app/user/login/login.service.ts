import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {
    
    currentUser : Object={};

    constructor(private http:Http){}

    loginUser(userType: string, username: string, password: string){
      return this.http.post("http://localhost:7075/authorizeUser",{username,password})
    }

    isAuthenticated():any{
        return this.currentUser["name"] ? true :false;
    }

    getProfile(){
        return this.currentUser;
    }

    signOut(){
        this.currentUser={};
    }

}