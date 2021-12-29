import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/_Models/cartelera-response';
  // import Swiper bundle with all modules installed
  import {Swiper} from 'swiper';

  // import styles bundle

@Component({
  selector: 'app-slideShow',
  templateUrl: './slideShow.component.html',
  styleUrls: ['./slideShow.component.scss']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

   swiper: Swiper;
   @Input() movies: Movie[];
  constructor() { }
  ngAfterViewInit(): void {
    this.initializeSwiper();
  }
  ngOnInit() {
   
  }

  initializeSwiper(){
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  moveNext(){
    this.swiper.slideNext();
  }

  movePrevoius(){
    this.swiper.slidePrev();
  }

}
