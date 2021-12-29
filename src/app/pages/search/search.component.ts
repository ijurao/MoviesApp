import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/_Models/cartelera-response';
import { MoviesService } from 'src/app/_Services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }
  searchedMovies : Movie[];
  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => (this.moviesService.getMoviesSearch(res.txt)).subscribe(data => {
     this.searchedMovies = data.results;
      })
    )}

}
