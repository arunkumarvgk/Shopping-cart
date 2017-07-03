import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProductService } from "app/services/product.service";
import { Product } from "app/product";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  products: Product[];
  phoneBrand: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    
    this.route.data.forEach((data)=>{
            this.products=data["products"];
    });
    
  }

}
