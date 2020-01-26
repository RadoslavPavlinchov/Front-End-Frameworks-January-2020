import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const baseUrl: string = 'https://api.themoviedb.org/3/movie';
const inTheatres: string = 'https://api.themoviedb.org/3/discover/movie'
const apiKey: string = `?api_key=2b779acd4e804f83a1475d3fd2a78194`;

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  
  constructor(private http:HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${baseUrl}/popular${apiKey}`)
  }

  getInTheatreMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${inTheatres}${apiKey}&with_release_type=2|3`)
  }
}
