import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProductService } from "app/services/product.service";

@Injectable()
export class PhoneDetailResolver implements Resolve<any>{

    constructor(private productService: ProductService) { }
    resolve(route: ActivatedRouteSnapshot){
        return this.productService.getPhone(route.params["brandName"],route.params["version"]);
    }
}