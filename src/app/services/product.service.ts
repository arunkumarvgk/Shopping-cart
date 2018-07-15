import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Phone } from 'app/model/phone.model';
import { Product } from 'app/product';

@Injectable()
export class ProductService {
    
    private _baseURL = "/assets/phones.json";
    private _brandsURL = this._baseURL+"/phones";
    private _phonePostURL = this._baseURL+"/addPhone";

    private phones: Phone[]; 
    constructor(private http: Http){}

    // Returns Complete Phones List
    getProductsList():Observable<string[]>{
        return this.http.get(this._baseURL).map((response: Response)=>{
            return response.json().map(json=>{
               return  json.brand;
            });
        }).catch(this.handleError);
    }

    getPhones(brandName: string):Observable<Phone[]>{
        return this.http.get(this._baseURL).map((response:Response)=>{
            return response.json().filter(json=>{
                return json.brand == brandName;
             });
        }).catch(this.handleError);
    }

    getPhone(brandName: string,version: string):Observable<Phone>{
        return this.http.get(this._baseURL) .map((response:Response)=>{
            return response.json().filter(json=>{
                return (json.brand == brandName) && (json.specification.version == version);
             });
        }).catch(this.handleError);
    }

    addPhone(phone:Phone){
       return this.http.post(this._phonePostURL,phone);       
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }
}