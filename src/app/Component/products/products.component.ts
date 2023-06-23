import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from '../../Model/product.model';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/State/product.state';
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

  onAction($event:ActionEvent):void {
    switch($event.type){
      case ProductActionsTypes.GET_ALL_PRODUCTS : {this.onGetAllProducts(); break;}
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS: {this.onGetAvailableProducts(); break;}
      case ProductActionsTypes.GET_SELECTED_PRODUCTS: {this.onGetSelectedProducts(); break;}
      case ProductActionsTypes.NEW_PRODUCT: {this.onNewProduct(); break;}
      case ProductActionsTypes.SELECT_PRODUCT: {this.onSelect($event.payload);break;}
      case ProductActionsTypes.DELETE_PRODUCT: {this.onDelete($event.payload);break;}
      case ProductActionsTypes.EDIT_PRODUCT: {this.onEdit($event.payload);break;}
    }
  }
}
