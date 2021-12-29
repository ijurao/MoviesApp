import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/_Models/cartelera-response';
import { MoviesService } from 'src/app/_Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  pageNumber = 1;
  @HostListener('window:scroll', ['$event']) onWindowsScroll() {

    const position = document.documentElement.scrollTop + 1300;
    const max = document.documentElement.scrollHeight;

    if(position > max)
    {
      this.getMoreMovies();
    }
}
  movies: Movie[] = [];
  moviesPosterGrid: Movie[] = [];
  constructor(private _moviesService: MoviesService) {
    this._moviesService.getMovies(1).subscribe(data => {
      
      this.movies = data.results;
      this.moviesPosterGrid = this.movies;
    
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }
  
  getMoreMovies(){
    
   this._moviesService.getMovies(this.pageNumber).subscribe(data => {
   this.moviesPosterGrid.push(...data.results)});
   this.pageNumber ++;
   console.log(this.moviesPosterGrid);
  }

}
