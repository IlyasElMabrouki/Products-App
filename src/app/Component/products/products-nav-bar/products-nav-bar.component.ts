import { Component, EventEmitter, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {

  @Output() eventEmitter : EventEmitter<ActionEvent>= new EventEmitter();

  onGetAllProducts(){
    this.eventEmitter.emit({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.eventEmitter.emit({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onGetSelectedProducts(){
    this.eventEmitter.emit({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onNewProduct(){
    this.eventEmitter.emit({type: ProductActionsTypes.NEW_PRODUCT});
  }

}
