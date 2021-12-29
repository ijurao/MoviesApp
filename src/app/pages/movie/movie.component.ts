import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast, Credit } from 'src/app/_Models/credit-response';
import { MovieResponse } from 'src/app/_Models/movie-response';
import { MoviesService } from 'src/app/_Services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: MovieResponse;
  movieCast : Cast[];
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private location : Location, private router: Router) { }

  ngOnInit() {
    const idToSearch = this.activatedRoute.snapshot.params.id;

    combineLatest([this.moviesService.getMovieById(idToSearch),this.moviesService.getMovieCredits(idToSearch)])
                  .subscribe(([movie,cast]) => { this.movieCast = cast.cast.filter(x => x.profile_path != null);
                    if(!movie)
                    {
                      this.router.navigate(['home'])
                      return;
                    }
                    this.movie = movie;   
                  })
    
  }


  backToPrevoiusPage(){
     this.location.back()
  }
}
