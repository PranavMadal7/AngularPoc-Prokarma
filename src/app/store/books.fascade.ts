import { Cart } from './cart.reducer';
import { Book, SearchBook } from '../shared/book.interface';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as booksSelector from './books.selector';
import * as cartSeletor from './cart.selector';
import { loadBooks, addedToCollection, addUser } from './books.action';
import * as cartAction from './cart.action';

@Injectable()
export class BooksFascade {
  constructor(private store: Store) {}

  AllBooks$ = this.store.select(booksSelector.selectAllBooks) as Observable<
    Book[]
  >;

  cartItems$ = this.store.select(cartSeletor.selectAllBooks) as Observable<
    Cart[]
  >;

  collectionItem$ = this.store.select(
    booksSelector.selectCollectionItem
  ) as Observable<Book[]>;

  searchTerm$ = this.store.select(
    booksSelector.selectSearchTerm
  ) as Observable<string>;

  User$ = this.store.select(booksSelector.selectUser) as Observable<any>;

  loadBooks(payload): void {
    this.store.dispatch(loadBooks(payload));
  }

  addToCart(book): void {
    this.store.dispatch(cartAction.addBook(book));
  }

  addToCollection(book): void {
    this.store.dispatch(addedToCollection(book));
  }

  addUser(user): void {
    this.store.dispatch(addUser(user));
  }

  removeFromCart(id): void {
    this.store.dispatch(cartAction.deleteUser({ id }));
  }
}
