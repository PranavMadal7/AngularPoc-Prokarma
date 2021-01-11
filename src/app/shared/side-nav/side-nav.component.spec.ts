import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksFascade } from 'src/app/store/books.fascade';
import { reducers } from 'src/app/store/books.selector';

import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  let books;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(reducers)],
      declarations: [SideNavComponent],
      providers: [BooksFascade],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the cart item count', inject(
    [BooksFascade],
    (facade: BooksFascade) => {
      facade.cartItems$ = new Observable((obs) => {
        obs.next(books);
        obs.complete();
      });
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.cartCount).toEqual(1);
    }
  ));

  it('should set the collection item count', inject(
    [BooksFascade],
    (facade: BooksFascade) => {
      facade.collectionItem$ = new Observable((obs) => {
        obs.next(books);
        obs.complete();
      });
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.collectionCount).toEqual(1);
    }
  ));
});
