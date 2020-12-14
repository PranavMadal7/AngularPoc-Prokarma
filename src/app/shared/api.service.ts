import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  onSearch(searchItems) {
    let params = new HttpParams();
    params = params.append('q', searchItems)
    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes', {params: params});
  }
}
