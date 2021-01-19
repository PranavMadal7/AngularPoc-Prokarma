import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  onSearch(searchItems) {
    return this.http.get<Book[]>('http://localhost:3000/api/books/' + searchItems);
  }
}
