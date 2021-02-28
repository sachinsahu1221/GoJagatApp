import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';
import { MessangerService } from '../services/messanger.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private router:Router, private productDetails: ProductsService, private msg: MessangerService) {
    this.segment = "details";
  }

  productDetailsPage: Products[] = [];
  similarProduct: Products[] = [];
  
go(){
  this.router.navigate(['/home']);
}
  ngOnInit() {
    this.productDetailsPage = this.productDetails.getProdDetails();
    this.similarProduct = this.productDetails.getProducts();
  }
  handleAddToCart() {
    this.msg.sendMsg(this.productDetailsPage);
  }

  segment: string;
  slideOptions = {
    initialSlide: 0
  };
  slideOptions2 = {
    slidesPerView: 1.5,
    spaceBetween: 10
  };
}
