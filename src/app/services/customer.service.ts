import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Customer } from 'app/model/customer.model';

@Injectable()
export class CustomerService{
    private _baseURL = "http://localhost:7075";
    private _addUserURL = this._baseURL+"/addUser";

    constructor(private http: Http){}

    addCustomer(customer: Customer){
      return  this.http.post(this._addUserURL,customer);
    }
}