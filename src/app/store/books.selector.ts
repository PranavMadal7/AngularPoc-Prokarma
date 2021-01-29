import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { bookReducerKey, State } from './books.reducer';
import * as bookReducer from './books.reducer';
import * as cartReducer from './cart.reducer';
import { environment } from 'src/environments/environment';
import { AppState, logger } from './reducer';

export interface BookState {
  book: bookReducer.State;
  cart: cartReducer.State;
}

export const reducers: ActionReducerMap<BookState> = {
  book: bookReducer.reducer,
  cart: cartReducer.cartreducer,
};

export const selectFeature = createFeatureSelector<State>(bookReducerKey);

export const selectAllBooks = createSelector(
  selectFeature,
  (state: State) => state.AllBooks
);

export const selectCollectionItem = createSelector(
  selectFeature,
  (state: State) => state.collectionItems
);

export const selectUser = createSelector(
  selectFeature,
  (state: State) => state.User
);

export const selectSearchTerm = createSelector(
  selectFeature,
  (state: State) => state.searchTerm
);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
