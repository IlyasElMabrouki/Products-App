import { Injectable } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {  GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductActionsTypes } from './products.actions';

@Injectable()
export class ProductsEffects {
    constructor(private productService : ProductsService, private effectActions: Actions){}

    getAllProductsEffect: Observable<Action> = createEffect(() =>
        this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((action) => {
                return this.productService.getAllProducts()
                .pipe(
                    map((products) => new GetAllProductsActionSuccess(products)),
                    catchError((err)=>of(new GetAllProductsActionError(err)))
                );
            }),
        )
    );

    getSelectedProductsEffect: Observable<Action> = createEffect(() =>
        this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action) => {
                return this.productService.getSelectedProducts()
                .pipe(
                    map((products) => new GetSelectedProductsActionSuccess(products)),
                    catchError((err)=>of(new GetSelectedProductsActionError(err)))
                );
            }),
        )
    );
}