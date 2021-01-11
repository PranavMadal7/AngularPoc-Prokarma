import { Book } from './../shared/book.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.action';
export interface Cart {
  id?: string;
  book?: Book;
}

export interface State extends EntityState<Cart> {
  // additional entities state properties
  selectedBookId: number;
}

export const adapter: EntityAdapter<Cart> = createEntityAdapter<Cart>({});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedBookId: null,
});

//   const cartReducer = createReducer(initialState);

export function cartreducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}

const cartReducer = createReducer(
  initialState,
  on(cartActions.addBook, (state, { book }) => {
    return adapter.addOne(book, state);
  }),
  on(cartActions.deleteUser, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);

export const getSelectedCaerrId = (state: State) => state.selectedBookId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectBookIds = selectIds;

// select the dictionary of user entities
export const selectBookEntities = selectEntities;

// select the array of users
export const selectAllCartBooks = selectAll;

// select the total user count
export const selectBooksTotal = selectTotal;
