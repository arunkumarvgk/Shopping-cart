import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/user/login/login.service";

enum TabIndexes {
  detail = 0,
  orders
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit , OnDestroy{

  type: number;
  private page: any;
  activeSince = new Date(2008, 3, 15);
  lastLogin = new Date(2017, 6, 27);

  profileObject:any={
    userType:"",
    userName:"",
    firstName:"",
    lastName:"",
  };

  orderDetails:Object={

  };

  constructor(private route: ActivatedRoute, public loginService:LoginService) { }

  ngOnInit() {
    this.page=this.route.params.subscribe(params => {
      this.type = +TabIndexes[params["type"]];
    });

    this.profileObject=this.loginService.getProfile();
  }


  ngOnDestroy(){
    this.page.unsubscribe();
  }

}


