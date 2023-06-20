import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavBarComponent } from './products-nav-bar.component';

describe('ProductsNavBarComponent', () => {
  let component: ProductsNavBarComponent;
  let fixture: ComponentFixture<ProductsNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsNavBarComponent]
    });
    fixture = TestBed.createComponent(ProductsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
