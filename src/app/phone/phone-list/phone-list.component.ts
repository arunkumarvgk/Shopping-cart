import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProductService } from "app/services/product.service";
import { Product } from "app/product";
import { LoginService } from "app/user/login/login.service";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  products: Product[];
  phoneBrand: string;
  isUserLogged: boolean;
  constructor(private route: ActivatedRoute, 
              private productService: ProductService, 
              private loginSerivce: LoginService) { }

  ngOnInit() {
    
    this.route.data.forEach((data)=>{
            this.products=data["phones"];
    });
    
    this.isUserLogged=this.loginSerivce.isAuthenticated();
  }

}
