import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BooksFascade } from 'src/app/store/books.fascade';
import { reducers } from 'src/app/store/books.selector';
import { BuyNowComponent } from './buy-now.component';

describe('BuyNowComponent', () => {
  let component: BuyNowComponent;
  let fixture: ComponentFixture<BuyNowComponent>;
  let book;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(reducers)],
      declarations: [BuyNowComponent],
      providers: [BooksFascade],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function billingForm(name, email, phoneNumber, address) {
    component.billingForm.controls['name'].setValue(name);
    component.billingForm.controls['email'].setValue(email);
    component.billingForm.controls['phoneNumber'].setValue(phoneNumber);
    component.billingForm.controls['address'].setValue(address);
  }

  it('on submit should add book to collction ', fakeAsync(() => {
    const facade = TestBed.inject(BooksFascade);
    const spy1 = spyOn(facade, 'addUser');
    component.onSubmit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy1);
    });
  }));
});
