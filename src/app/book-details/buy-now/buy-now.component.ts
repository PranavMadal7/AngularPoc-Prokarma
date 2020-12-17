import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss'],
})
export class BuyNowComponent implements OnInit {
  billingForm: FormGroup;
  bookSubs: Subscription;
  book: any = {};

  constructor(
    private bookService: BookService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.billingForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      phoneNumber: new FormControl('', {
        validators: [
          Validators.required,
          Validators.max(9999999999),
          Validators.min(1000000000),
        ],
      }),
      address: new FormControl('', { validators: [Validators.required] }),
    });

    this.bookSubs = this.bookService.bookItem.subscribe((res) => {
      this.book = { ...res };
    });
  }

  // convinence getter for ease access to form field
  get f() {
    return this.billingForm.controls;
  }

  // submission of billing info
  onSubmit() {
    if (
      !this.billingForm.invalid &&
      Object.keys(this.book).length !== 0 &&
      this.book.constructor === Object
    ) {
      this.bookService.addBookCollection(this.book);
      this.book.bill = this.billingForm.value;
    }
  }

  openSnackBar() {
    if (
      !this.billingForm.invalid &&
      Object.keys(this.book).length !== 0 &&
      this.book.constructor === Object
    ) {
      this._snackBar.open('Successfull', 'close', {
        duration: 2000,
      });
    }
  }
}
