import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "app/product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  

  products: Product[];

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  color:string;

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
}
