import { Component, OnInit } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{
  productsState : Observable<ProductsState> | null = null;
  readonly ProductsStateEnum = ProductsStateEnum; 
  constructor(private store:Store<any>){}

  ngOnInit(){
    this.productsState = this.store.pipe(
      map((state) => state.catalogState)
    )
  }
}
