import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BooksFascade } from 'src/app/store/books.fascade';
import { reducers } from 'src/app/store/books.selector';
import { BuyNowComponent } from './buy-now.component';
import { User } from 'src/app/shared/book.interface';

describe('BuyNowComponent', () => {
  let component: BuyNowComponent;
  let fixture: ComponentFixture<BuyNowComponent>;
  let user;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        OverlayModule,
      ],
      declarations: [BuyNowComponent],
      providers: [BooksFascade, MatSnackBar],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNowComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    user = {
      name: 'some name',
      email: 'some eamil',
      phoneNumber: '1234567891',
      address: 'some address',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user form validity', () => {
    component.ngOnInit();
    expect(component.billingForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    component.ngOnInit();
    let name = component.billingForm.controls['name'];
    expect(name.valid).toBeFalsy();
    let errors = {};
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field validity', () => {
    component.ngOnInit();
    let email = component.billingForm.controls['email'];
    expect(email.valid).toBeFalsy();
    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('phone number field validity', () => {
    component.ngOnInit();
    let phoneNumber = component.billingForm.controls['phoneNumber'];
    expect(phoneNumber.valid).toBeFalsy();
    let errors = {};
    errors = phoneNumber.errors;
    expect(errors['required']).toBeTruthy();
  });

  it('address field validity', () => {
    component.ngOnInit();
    let address = component.billingForm.controls['address'];
    expect(address.valid).toBeFalsy();
    let errors = {};
    errors = address.errors;
    expect(errors['required']).toBeTruthy();
  });

  it('on submit should add book to collection ', fakeAsync(() => {
    expect(component.billingForm.valid).toBeFalsy();
    const facade = TestBed.inject(BooksFascade);
    const spy1 = spyOn(facade, 'addUser');
    component.billingForm.valid;
    component.onSubmit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy1);
    });
  }));

  it('opens pop up dialog', () => {
    expect(component.openSnackBar()).toHaveBeenCalled();
  });

  it('should return biiling form controls', () => {
    expect(component.f).toBe(component.billingForm.controls);
  });

});
