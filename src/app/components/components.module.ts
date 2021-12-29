import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slideShow/slideShow.component';
import { MoviesPosterGridComponent } from './moviesPosterGrid/moviesPosterGrid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideComponent } from './castSlide/castSlide.component';



@NgModule({
  declarations: [NavbarComponent,SlideShowComponent,MoviesPosterGridComponent,CastSlideComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [NavbarComponent,SlideShowComponent,MoviesPosterGridComponent,RatingModule,CastSlideComponent ]
})
export class ComponentsModule { }
