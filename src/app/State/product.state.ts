export enum ProductActionsTypes {
    GET_ALL_PRODUCTS = "Get all products",
    GET_SELECTED_PRODUCTS = "Get selected products",
    GET_AVAILABLE_PRODUCTS = "Get available products",
    NEW_PRODUCT = "New product",
    SELECT_PRODUCT = "Select product",
    DELETE_PRODUCT = "Delete product",
    EDIT_PRODUCT = "Edit product"
}

export interface ActionEvent {
    type: ProductActionsTypes,
    payload?: any
}

export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
} 

export interface AppDataState<T>{
    dataState?: DataStateEnum,
    data?: T,
    errorMessage?:String
}