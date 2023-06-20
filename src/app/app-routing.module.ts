import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Component/products/products.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductAddComponent } from './Component/product-add/product-add.component';
import { ProductEditComponent } from './Component/product-edit/product-edit.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "newProduct", component: ProductAddComponent},
  {path: "editProduct/:id", component: ProductEditComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
