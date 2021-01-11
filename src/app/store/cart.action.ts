import { Book } from './../shared/book.interface';
import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Cart } from './cart.reducer';

export const addBook = createAction(
  '[User/API] Added to cart',
  props<{ book: Book }>()
);
export const deleteUser = createAction(
  '[User/API] Removed from cart',
  props<{ id: string }>()
);
