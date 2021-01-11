import { ApiService } from '../shared/services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as booksAction from './books.action';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(booksAction.loadBooks),
      mergeMap((action) =>
        this.apiService.onSearch(action.searchTerm).pipe(
          map(
            (books) => ({ type: '[Load Books] Search', books: books }),
            catchError(() => EMPTY)
          )
        )
      )
    )
  );
}
