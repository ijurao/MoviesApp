import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/_Models/cartelera-response';
import { MoviesService } from 'src/app/_Services/movies.service';

@Component({
  selector: 'app-moviesPosterGrid',
  templateUrl: './moviesPosterGrid.component.html',
  styleUrls: ['./moviesPosterGrid.component.scss']
})
export class MoviesPosterGridComponent implements OnInit {

  pageNumber: number = 1;

 


  @Input() movies: Movie[];
  constructor(private _moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  showDetails(movie : Movie)
  {
      this.router.navigate(['movie',movie.id]);
  }


}
