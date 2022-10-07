import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() addToCartClick = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    // console.log("Ha presionado en el producto: ", this.product)
    this.addToCartClick.emit(this.product)
  }

}
