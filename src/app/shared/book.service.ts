import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookItem = new Subject<any>();
  private book: any;

  constructor() {}

  getBookItemListener() {
    return this.bookItem.asObservable();
  }


  get booksItems() {
    return this.book;
  }

  set booksItems(item) {
    this.book = item;
  }
}
