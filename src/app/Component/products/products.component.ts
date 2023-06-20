import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from '../../Model/product.model';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/State/product.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products? : Observable<AppDataState<Product[]>>;
  constructor(private productService:ProductsService, private router:Router){}

  onGetAllProducts(){
    this.products = this.productService.getAllProducts().pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onGetSelectedProducts(){
    this.products = this.productService.getSelectedProducts().pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onGetAvailableProducts(){
    this.products = this.productService.getAvailableProducts().pipe(
      map(data=>({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onSelect(p:Product){
    this.productService.select(p)
      .subscribe(data=>{
        p.selected = data.selected;
      })
  }

  onDelete(p:Product){
    this.productService.delete(p)
      .subscribe(data=>{
        alert("Success");
        this.productService.getAllProducts();
      });
  }

  onNewProduct(){
    this.router.navigateByUrl('/newProduct');
  }

  onEdit(p:Product){
    this.router.navigateByUrl('/editProduct/'+p.id);
  }
}
