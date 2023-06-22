import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {News} from './model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    const newsUrl = `${this.apiUrl}/news`;
    return this.http.get<any>(newsUrl);
  }

  markAsFavorite(newsItemTitle: string): Observable<any> {
    const favoriteUrl = `${this.apiUrl}/favorites`;
    return this.http.post<any>(favoriteUrl, { title: newsItemTitle });
  }

  getFavorites(): Observable<any> {
    const favoritesUrl = `${this.apiUrl}/favorites`;
    return this.http.get<any>(favoritesUrl);
  }
}
