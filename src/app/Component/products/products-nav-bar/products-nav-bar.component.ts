import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetSelectedProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {

  constructor(private store:Store<any>){}

  onGetAllProducts(){
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts(){
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

}
