import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { ProductsComponent } from './Component/products/products.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductsService } from './Services/products.service';
import { ProductAddComponent } from './Component/product-add/product-add.component';
import { ProductEditComponent } from './Component/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './Component/products/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './Component/products/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
