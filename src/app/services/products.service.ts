import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Product} from '../model/product.model';



@Injectable({providedIn: 'root'})
export class ProductsService{
    constructor(private http: HttpClient){

    }
    getAllProducts(): Observable<Product[]>{
        const host = environment.host;
        return this.http.get<Product[]>(host + '/products');
    }
    getSelectedProducts(): Observable<Product[]>{
        const host = environment.host;
        return this.http.get<Product[]>(host + '/products?selected=true');
    }
    getAvaiableProducts(): Observable<Product[]>{
        const host = environment.host;
        return this.http.get<Product[]>(host + '/products?available=true');
    }

}
