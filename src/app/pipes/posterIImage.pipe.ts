import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterIImage'
})
export class PosterIImagePipe implements PipeTransform {

  // <img src= class="img-fluid poster">

  transform(poster: string): string {
    if(poster != null)
    {
      return 'https://image.tmdb.org/t/p/w500' + poster
    }
    else{
      return "./assets/no-image.jpg";

    }
  }

}
