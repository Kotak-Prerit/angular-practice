import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProductsTable } from './orders-products-table';

describe('OrdersProductsTable', () => {
  let component: OrdersProductsTable;
  let fixture: ComponentFixture<OrdersProductsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersProductsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersProductsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
