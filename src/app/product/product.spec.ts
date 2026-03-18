import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from './product'; // 1. Cập nhật đường dẫn và tên class

describe('Product', () => { // 2. Đổi tên nhóm test
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product], // 3. Import component Product
    }).compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});