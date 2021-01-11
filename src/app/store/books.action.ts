import { createAction, props } from '@ngrx/store';
import { Book, User } from '../shared/book.interface';

export const loadBooks = createAction(
  '[Load Books Start] Search',
  props<{ searchTerm: string }>()
);

export const booksLoaded = createAction(
  '[Load Books] Search',
  props<{ books: any[] }>()
);

export const addedToCart = createAction(
  'added to cart',
  props<{ book: Book }>()
);

export const removeFromCart = createAction(
  'remove from',
  props<{ id: string }>()
);

export const addedToCollection = createAction(
  'added to collection',
  props<{ book: Book }>()
);

export const addUser = createAction('add User', props<{ user: User }>());
