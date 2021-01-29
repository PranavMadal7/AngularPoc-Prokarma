import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksFascade } from 'src/app/store/books.fascade';
import { reducers } from 'src/app/store/books.selector';

import { AddToCartComponent } from './add-to-cart.component';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;
  let book;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(reducers)],
      declarations: [AddToCartComponent],
      providers: [BooksFascade],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    book = [
      {
        authors: ['Brad Green', 'Shyam Seshadri'],
        averageRating: 2.5,
        description:
          'Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps. Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging. If you have JavaScript experience, you’ll learn how AngularJS helps reduce the complexity of your web app. Dive deep into Angular’s building blocks and learn how they work together Gain maximum flexibility by separating logic, data, and presentation responsibilities with MVC Assemble your full app in the browser, using client-side templates Use AngularJS directives to extend HTML with declarative syntax Communicate with the server and implement simple caching with the $http service Use dependency injection to improve refactoring, testability, and multiple environment design Get code samples for common problems you face in most web apps',
        id: 'eNExy_X1YYcC',
        imageLinks:
          'http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        language: 'en',
        pageCount: 196,
        publisher: "O'Reilly Media, Inc.",
        title: 'AngularJS',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set all books count', inject(
    [BooksFascade],
    (fascade: BooksFascade) => {
      fascade.cartItems$ = new Observable((obs) => {
        obs.next(book);
        obs.complete();
      });
      component.ngOnInit();
      fixture.detectChanges();
      component.cartItems$.subscribe((data) => {
        expect(data).toEqual(book);
      });
    }
  ));

  it('on buy should navigate to biling and add it to collection', inject(
    [BooksFascade, Router],
    (fascade: BooksFascade, router: Router) => {
      const spy1 = spyOn(router, 'navigate');
      const spy = spyOn(fascade, 'addToCollection');
      component.purchase(book[0]);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith({ book: book[0] });
      expect(spy1).toHaveBeenCalledWith(['/buyNow']);
    }
  ));

  it('should remove from cart', inject(
    [BooksFascade],
    (facade: BooksFascade) => {
      const spy = spyOn(facade, 'removeFromCart');
      component.deleteBook(book);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(book.id);
    }
  ));
});
