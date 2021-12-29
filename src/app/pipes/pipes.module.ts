import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterIImagePipe } from './posterIImage.pipe';



@NgModule({
  declarations: [	
      PosterIImagePipe
   ],
  imports: [
    CommonModule
  ], 
  exports: [PosterIImagePipe]
})
export class PipesModule { }
