import { Action } from "@ngrx/store";
import { Product } from "../Model/product.model";
import { ProductActionsTypes, ProductsActions } from "./products.actions";

export enum ProductsStateEnum {
    INITIAL = "Initial",
    LOADING = "Loading",
    LOADED = "Success",
    ERROR = "Error"
} 

export interface ProductsState {
    products : Product[],
    errorMessage : String,
    dataState : ProductsStateEnum
}

const initState: ProductsState= {
    products : [],
    errorMessage : "",
    dataState : ProductsStateEnum.INITIAL
}

export function productReducer(state=initState, action:Action) : ProductsState {
    switch(action.type){
        case ProductActionsTypes.GET_ALL_PRODUCTS:
            return {...state, dataState: ProductsStateEnum.LOADING}
        case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
        case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
        case ProductActionsTypes.GET_SELECTED_PRODUCTS:
            return {...state, dataState: ProductsStateEnum.LOADING}
        case ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
        case ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
            return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
        default : return {...state}
    }
}
