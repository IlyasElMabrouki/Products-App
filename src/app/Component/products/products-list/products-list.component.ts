import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Model/product.model';
import { ActionEvent, AppDataState, ProductActionsTypes } from 'src/app/State/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() products? : Observable<AppDataState<Product[]>>;
  @Output() eventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  onSelect(product: Product){
    this.eventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onDelete(product:Product){
    this.eventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT, payload: product});
  }
  onEdit(product:Product){
    this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT, payload: product});
  }
}
