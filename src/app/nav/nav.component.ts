import { Component, OnInit } from "@angular/core";
import { LoginService } from "app/user/login/login.service";
import { Router, ActivatedRoute, Resolve } from "@angular/router";
import { ProductService } from "app/services/product.service";
import { Product } from "app/product";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {

  title: string = "VGK Product";
  products: Product[];
  brands:Array<string>;

  constructor(public loginService: LoginService , 
              private router: Router,
              private productService: ProductService,
              private activatedRoute:ActivatedRoute,) { }

  ngOnInit() {
    this.productService.getProductsList()
      .subscribe(products => {
        return this.brands=products.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        });         
      });
  }

  signOut(){
    this.loginService.signOut();
    this.router.navigate(["/Home"]);
  }

}
