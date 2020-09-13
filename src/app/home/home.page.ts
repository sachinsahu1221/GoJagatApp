import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    this.segment = "home";
  }
  ngOnInit() {
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
