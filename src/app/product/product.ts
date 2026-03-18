import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule, ProductDetail],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
    //thuộc tính
    // count = 0;
    // link = 'https://www.facebook.com/';
    // name = '';

    // isLogin = true;

    // foods = ['Pizza', 'Burger', 'Pasta']
    // increase() {
    //     //phương thức
    //     this.count++;
    // }
    name: string = 'Iphone 15 Pro Max'

    handle(data: string){
    console.log(data);
    }
}
