import { Book } from '../shared/book.interface';
import { Store, StoreModule } from '@ngrx/store';
import { BooksFascade } from './books.fascade';
import { inject, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from './books.selector';
import { Observable, of } from 'rxjs';
import * as fromAction from './books.action';
import * as cartAction from './cart.action';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('bookFascade', () => {
  let facade: BooksFascade;
  let store: Store;
  let books: Book[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(reducers)],
      providers: [BooksFascade],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    facade = TestBed.inject(BooksFascade);
  });

  beforeEach(() => {
    store = TestBed.inject(Store);
    books = [
      {
        id: '0BSOg0oHhZ0C',
        authors: ['sfs', 'sfsf'],
        title: 'Angular Momentum in Quantum Mechanics',
        publisher: 'Princeton University Press',
        description:
          'This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.',
        pageCount: 146,
        averageRating: 4,
        imageLinks:
          'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        language: 'en',
      },
    ];
  });

  it('should be facade', () => {
    expect(facade).toBeTruthy();
  });

  it('should call action with seathterm', () => {
    const spy = spyOn(store, 'dispatch');
    facade.loadBooks({ searchTerm: 'java' });
    expect(spy).toHaveBeenCalledWith(
      fromAction.loadBooks({ searchTerm: 'java' })
    );
  });
  it('should be add to cart action', () => {
    const spy = spyOn(store, 'dispatch');
    facade.addToCart({ book: books[0] });
    expect(spy).toHaveBeenCalledWith(cartAction.addBook({ book: books[0] }));
  });

  it('should be add to collection action', () => {
    const spy = spyOn(store, 'dispatch');
    facade.addToCollection({ book: books[0] });
    expect(spy).toHaveBeenCalledWith(
      fromAction.addedToCollection({ book: books[0] })
    );
  });

  it('should remove from cart ', () => {
    const spy = spyOn(store, 'dispatch');
    facade.removeFromCart('0BSOg0oHhZ0C');
    expect(spy).toHaveBeenCalledWith(
      cartAction.deleteUser({ id: '0BSOg0oHhZ0C' })
    );
  });

  it('should  add user ', () => {
    const user = {
      name: 'somename',
      email: 'some email',
      phoneNumber: 'some mobile',
      address: 'some address',
    };
    const spy = spyOn(store, 'dispatch');
    facade.addUser({ user });
    expect(spy).toHaveBeenCalledWith(fromAction.addUser({ user }));
  });
});
