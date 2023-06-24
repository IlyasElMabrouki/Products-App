import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommService } from 'src/app/Services/comm.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {

  constructor(private comm : CommService){}

  onGetAllProducts(){
    this.comm.publishEvent({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.comm.publishEvent({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onGetSelectedProducts(){
    this.comm.publishEvent({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onNewProduct(){
    this.comm.publishEvent({type: ProductActionsTypes.NEW_PRODUCT});
  }

}
