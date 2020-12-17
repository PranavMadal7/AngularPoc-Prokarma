import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookItem = new BehaviorSubject<any>({});
  private book: any;
  bookCount = new BehaviorSubject<number>(0);
  private books: any[] = [];
  bookChanged = new BehaviorSubject<any>({});
  private bookCollection: any[] = [];
  bookCollectionList = new BehaviorSubject<any>({});

  constructor() {}

  getBookItemListener() {
    return this.bookItem.asObservable();
  }

  // return book count of cart
  getBookCountListener() {
    return this.bookCount.asObservable();
  }

  // add to cart
  addCart(book) {
    this.books.push(book);
    this.bookChanged.next(this.books);
  }

  // remove book from cart
  removeCartBook(book) {
    this.books = this.books.filter((ele, index) => {
      return ele.id !== book.id;
    });
    this.bookChanged.next(this.books);
  }

  // return cart book
  getCartListener() {
    return this.bookChanged.asObservable();
  }

  // add to collection
  addBookCollection(book) {
    this.bookCollection.push(book);
    this.bookCollectionList.next(this.bookCollection);
  }

  getBookCollectionListener() {
    return this.bookCollectionList.asObservable();
  }




  get booksItems() {
    return this.book;
  }

  set booksItems(item) {
    this.book = item;
  }
}
