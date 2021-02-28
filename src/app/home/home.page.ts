import { Component, OnInit, ViewChild } from '@angular/core';
import { MessangerService } from '../services/messanger.service';
import { IonSlides } from '@ionic/angular';
import { Products } from '../models/products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cartItems = [];
  response: any;

  constructor(private msg: MessangerService) {
    this.segment = "home";
  }

  ngOnInit() {
    this.msg.getMsg().subscribe((prodItem:Products) => {
      this.response = prodItem;
      this.response.forEach(item => {
        this.cartItems.push({
          prodId: item.productId,
          prodName: item.name,
          prodDesc: item.description,
          prodImg: item.imageURL,
          prodSellPrice: item.sellingPrice,
          prodListPrice: item.listPrice,
        });
      });
        // console.log(prodItem)
      })
      console.log(this.cartItems)
  }

  

  segment: string;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  // customQtyOptions: any = {
  //   header: 'Sizes',
  //   subHeader: 'Select size'
  // };

}
