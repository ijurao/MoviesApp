import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse } from '../_Models/cartelera-response';
import { Credit } from '../_Models/credit-response';
import { MovieResponse } from '../_Models/movie-response';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://api.themoviedb.org/3/'
constructor(private _http: HttpClient) { }


getMovies(page:number):Observable<CarteleraResponse>{
  console.log(page);
  return this._http.get<CarteleraResponse>(this.baseUrl + 
    'movie/now_playing?api_key=b86c9379dc574f82843d045ff85cd0f8&language=en-US&page=' + page.toString())
}

getMoviesSearch(txt:string):Observable<CarteleraResponse>{
 
  return this._http.get<CarteleraResponse>(this.baseUrl + 
    'search/movie?api_key=b86c9379dc574f82843d045ff85cd0f8&language=en-US&page=1&include_adult=true&query=' + txt );
}

getMovieById(id:string):Observable<MovieResponse>{
 
   //https://api.themoviedb.org/3/movie/ + id + '?api_keyb86c9379dc574f82843d045ff85cd0f8=&language=en-US
  return this._http.get<MovieResponse>(this.baseUrl + 
    'movie/' + id + '?api_key=b86c9379dc574f82843d045ff85cd0f8&language=en-US').pipe(catchError(error => of(null) ));

    
}
getMovieCredits(id:string):Observable<Credit>{
  return this._http.get<Credit>(this.baseUrl + 
   'movie/' + id + '/credits?api_key=b86c9379dc574f82843d045ff85cd0f8&language=en-US').pipe(catchError(error => of(null) ));;
}



}



//https://api.themoviedb.org/3/movie/now_playing?api_key=b86c9379dc574f82843d045ff85cd0f8&language=en-US&page=1

