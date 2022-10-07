import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // nameApp: string = "diego";
  private apiURL = "http://localhost:3002/products";
  constructor(private http: HttpClient) {
    
   }
   getProducts(): Observable<any>{
    return this.http.get<IProduct[]>(this.apiURL);
   }
}
