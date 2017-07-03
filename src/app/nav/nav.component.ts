import { Component, OnInit } from "@angular/core";
import { LoginService } from "app/user/login/login.service";
import { Router } from "@angular/router";
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
  brands: any;
  
  constructor(public loginService: LoginService , 
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    /*this.productService.getProducts().subscribe((product)=>{
      console.log("=======> "+product);
    });

    this.productService.getProducts()
                .subscribe(products => this.products = products);*/
    
    console.log(this.productService.getProducts());
    this.products=<Product[]>this.productService.getProducts();
    this.brands =  new Set(this.products.map(item => item.brand));
  }

  signOut(){
    this.loginService.signOut();
    this.router.navigate(["/Home"]);
  }

}
