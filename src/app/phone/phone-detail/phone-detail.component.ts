import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Phone } from 'app/model/phone.model';
import { LoginService } from "app/user/login/login.service";

@Component({
    templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent implements OnInit {
    
    phone : Phone;

    isUserLogged: boolean=false;

    constructor(private route: ActivatedRoute, private loginSerivce: LoginService) { }
  
    ngOnInit() {
      this.route.data.forEach((data)=>{ 
          this.phone = data["phone"][0];
      });
      this.isUserLogged=this.loginSerivce.isAuthenticated();
    }

  
}