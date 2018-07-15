import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ProductService } from "app/services/product.service";


@Injectable()
export class PhoneListResolver implements Resolve<any>{
    
    constructor(private productSerivce : ProductService){}
    resolve(){
        this.productSerivce.getProductsList();
    }
}