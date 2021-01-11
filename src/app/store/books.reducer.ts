import { Action, createReducer, on } from '@ngrx/store';
import { Book, User } from '../shared/book.interface'
import * as bookActions from './books.action';

export interface State {
  User: User;
  AllBooks: Book[];
  loaded: boolean;
  collectionItems: Book[];
  searchTerm: string;
}

export const bookReducerKey = 'book';

const initalUser: User = {
  name: '',
  email: '',
  mobile: '',
  address: '',
};

export const initialState: State = {
  User: initalUser,
  AllBooks: [],
  loaded: false,
  collectionItems: [],
  searchTerm: '',
};

const scoreboardReducer = createReducer(
  initialState,
  on(bookActions.booksLoaded, (state, action) => ({
    ...state,
    AllBooks: action.books,
    loaded: true,
  })),

  on(bookActions.loadBooks, (state, action) => ({
    ...state,
    searchTerm: action.searchTerm,
  })),

  on(bookActions.addedToCollection, (state, action) => ({
    ...state,
    collectionItems: [...state.collectionItems, action.book],
  })),

  on(bookActions.addUser, (state, action) => ({ ...state, User: action.user }))
);

export function reducer(state: State | undefined, action: Action): any {
  return scoreboardReducer(state, action);
}
