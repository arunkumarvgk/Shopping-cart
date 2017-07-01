import { Component, OnInit } from "@angular/core";
import { LoginService } from "app/user/login/login.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {

  title: string = "VGK Product";

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

}
