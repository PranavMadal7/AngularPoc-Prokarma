import * as fromReducer from './books.reducer';
import * as fromAction from './books.action';
import * as cartReducer from './cart.reducer';
import * as cartAction from './cart.action';
import { BooksFascade } from './books.fascade';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ngrx-store', () => {
  let book;
  let initialUser;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [],
      providers: [BooksFascade],
    }).compileComponents();
  });

  beforeEach(() => {
    book = [
      {
        kind: 'books#volume',
        id: '0BSOg0oHhZ0C',
        etag: 'sWJBeRbxMK0',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C',
        volumeInfo: {
          authors: ['sfs', 'sfsf'],
          title: 'Angular Momentum in Quantum Mechanics',
          publisher: 'Princeton University Press',
          publishedDate: '1996',
          description:
            'This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.',
          pageCount: 146,
          printType: 'BOOK',
          averageRating: 4,
          ratingsCount: 1,
          maturityRating: 'NOT_MATURE',
          allowAnonLogging: false,
          contentVersion: '2.1.2.0.preview.1',
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'en',
          previewLink:
            'http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api',
          infoLink:
            'http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api',
          canonicalVolumeLink:
            'https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C',
        },
        saleInfo: {
          country: 'IN',
          saleability: 'NOT_FOR_SALE',
          isEbook: false,
        },
        accessInfo: {
          country: 'IN',
          viewability: 'PARTIAL',
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: 'ALLOWED',
          epub: { isAvailable: false },
          pdf: {
            isAvailable: true,
            acsTokenLink:
              'http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
          },
          webReaderLink:
            'http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api',
          accessViewStatus: 'SAMPLE',
          quoteSharingAllowed: false,
        },
        searchInfo: {
          textSnippet:
            '<b>Angular</b> Momentum of a System of Particles PRELIMINARY REMARKS . In <br>\nclassical mechanics the <b>angular</b> momentum of a system of n particles relative to a <br>\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position <br>\nvector&nbsp;...',
        },
      },
    ];
    initialUser = {
      name: 'anurag',
      email: 'ang@gamil',
      mobile: '3434334',
      address: 'hyd',
    };
  });

  it('should set the serarchTerm', () => {
    const initialState = fromReducer.initialState;
    const action = fromAction.loadBooks({ searchTerm: 'angular' });
    const state = fromReducer.reducer(initialState, action);

    expect(state.searchTerm).toBe('angular');
  });

  it('should set the should set allBooks', () => {
    const initialState = fromReducer.initialState;
    const action = fromAction.booksLoaded({ books: book });
    const state = fromReducer.reducer(initialState, action);

    expect(state.AllBooks).not.toBe(null);
  });

  it('should add the item to cart', () => {
    const initialState = fromReducer.initialState;
    const action = fromAction.addedToCart({ book: book[0] });
    const state = fromReducer.reducer(initialState, action);

    expect(state.cartItems).not.toBe(null);
  });

  it('should add the item to collection', () => {
    const initialState = fromReducer.initialState;
    const action = fromAction.addedToCollection({ book: book[0] });
    const state = fromReducer.reducer(initialState, action);

    expect(state.collectionItems).not.toBe(null);
  });

  it('should add the User', () => {
    const initialState = fromReducer.initialState;
    const action = fromAction.addUser({ user: initialUser });
    const state = fromReducer.reducer(initialState, action);

    expect(state.User.name).toBe('anurag');
  });
});
