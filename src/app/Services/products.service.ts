import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  getSelectedProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products?selected=true");
  }

  getAvailableProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products?available=true");
  }

  select(product:Product):Observable<Product>{
    product.selected = !product.selected;
    return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);
  }

  delete(product:Product):Observable<void>{
    return this.http.delete<void>("http://localhost:3000/products/"+product.id);
  }

  save(product:Product):Observable<Product>{
    return this.http.post<Product>("http://localhost:3000/products/",product);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>("http://localhost:3000/products/"+id);
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);
  }

}
