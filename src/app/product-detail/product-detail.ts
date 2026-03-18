import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  @Input() productName : String = '';
  @Output() handleClick = new EventEmitter<string>();

  handleSend(){
    this.handleClick.emit('Hello from product detail');
  }
}
