import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/_Models/credit-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-castSlide',
  templateUrl: './castSlide.component.html',
  styleUrls: ['./castSlide.component.scss']
})
export class CastSlideComponent implements OnInit, AfterViewInit {

  @Input() casting: Cast[];
  constructor() { }
  ngAfterViewInit(): void {
     const swiper = new Swiper('.swiper-container',{
       slidesPerView:5.3,
       freeMode:true,
       spaceBetween:15
     });
  }

  ngOnInit() {
    console.log(this.casting);
  }

}
