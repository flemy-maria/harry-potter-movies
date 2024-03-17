import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './models/list';
import { Details } from './models/details';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  getMovieList(): Observable<List[]> {
    return this.http.get<List[]>('/movies')
  }
  getMovieDetails(id: string): Observable<Details> {
    return this.http.get<Details>('/movies/' + id)
  }
}
