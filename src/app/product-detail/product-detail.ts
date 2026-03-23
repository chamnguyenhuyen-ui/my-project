import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  @Input() productName: string = '';
  @Output() handleClick = new EventEmitter<string>();

  handleSend() {
    this.handleClick.emit('Hello from product detail');
  }

  @Input() productPrice: string = '';
  @Output() priceClick = new EventEmitter<string>();

  handlePriceSend() {
    this.priceClick.emit(this.productPrice);
  }

  @Input() productStock: string = '';
  @Output() stockClick = new EventEmitter<string>();

  handleStockSend() {
    this.stockClick.emit(this.productStock);
  }
}