import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Phone } from 'app/model/phone.model';

@Injectable()
export class ProductService {
    
    private _baseURL = "http://localhost:7070";
    private _brandsURL = this._baseURL+"/phones";
    private _phonePostURL = this._baseURL+"/addPhone";

    constructor(private http: Http){}

    // Returns Complete Phones List
    getProductsList():Observable<string[]>{
        return this.http.get(this._brandsURL)
        .map((response: Response)=>{
            return <string[]>response.json();
        }).catch(this.handleError);
    }

    getPhones(brandName: string):Observable<Phone[]>{
        return this.http.get(this._brandsURL+"/"+brandName)
        .map((response:Response)=>{
            return <Phone[]>response.json();
        }).catch(this.handleError);
    }

    getPhone(brandName: string,version: string):Observable<Phone>{
        return this.http.get(this._brandsURL+"/"+brandName+"/"+version)
        .map((response:Response)=>{
            return <Phone>response.json();
        }).catch(this.handleError);
    }

    addPhone(phone:Phone){
       return this.http.post(this._phonePostURL,phone);       
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }
}