import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as cartReducer from './cart.reducer';

export const selectUserState = createFeatureSelector<cartReducer.State>('cart');

export const selectUserIds = createSelector(
  selectUserState,
  cartReducer.selectBookIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);

export const selectAllBooks = createSelector(
  selectUserState,
  cartReducer.selectAllCartBooks
);
