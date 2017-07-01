import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    currentUser : Object={};

    loginUser(userType: string, userName: string, password: string){
        if ((userType == "Customer" && userName === "arun" && password === "kiran")) {
            this.currentUser={
                userType:userType,
                userName:userName,
                firstName:"ArunKumar",
                lastName:"Venkatesh"
            }
            return true;
        }else if(userType == "Admin" && userName === "kiran" && password === "arun"){
            this.currentUser={
                userType:userType,
                userName:userName,
                firstName:"KiranKumar",
                lastName:"Venkatesh"
            }
            return true;
        }   
    }

    isAuthenticated():any{
        return this.currentUser["userType"] ? true :false;
    }


}