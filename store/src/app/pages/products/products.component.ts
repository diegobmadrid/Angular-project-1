import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from "rxjs/operators";
import { IProduct } from './interfaces/product.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getProducts().pipe(
      tap((products: IProduct[]) => console.log(this.products = products))
    ).subscribe();
  }

  addToCart(product: IProduct): void {
    console.log("Add to cart", product)
  }

}
