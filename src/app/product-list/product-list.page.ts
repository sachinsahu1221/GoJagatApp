import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(private productService: ProductsService) { }

  productList: Products[] = [];
  
  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

}
