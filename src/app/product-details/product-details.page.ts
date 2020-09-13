import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private router:Router) {
    this.segment = "details";
  }
  
go(){
  this.router.navigate(['/home']);
}
  ngOnInit() {
  }
  segment: string;
  slideOptions = {
    initialSlide: 0
  };
  slideOptions2 = {
    initialSlide: 0
  };
}
