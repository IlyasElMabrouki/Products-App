import { Action } from "@ngrx/store";
import { Product } from "../Model/product.model";

export enum ProductActionsTypes {
    GET_ALL_PRODUCTS = "[Products] Get all products",
    GET_ALL_PRODUCTS_SUCCESS = "[Products] Get all products",
    GET_ALL_PRODUCTS_ERROR = "[Products] Get all products",
    GET_SELECTED_PRODUCTS = "[Products] Get selected products",
    GET_SELECTED_PRODUCTS_SUCCESS = "[Products] Get selected products",
    GET_SELECTED_PRODUCTS_ERROR = "[Products] Get selected products"
}

export class GetAllProductsAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any){}
}

export class GetAllProductsActionSuccess implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){}
}

export class GetAllProductsActionError implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: String){}
}

export class GetSelectedProductsAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload: any){}
}

export class GetSelectedProductsActionSuccess implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){}
}

export class GetSelectedProductsActionError implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload: String){}
}

export type ProductsActions = GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError 
            | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError;