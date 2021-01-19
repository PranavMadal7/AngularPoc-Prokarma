import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksFascade } from 'src/app/store/books.fascade';
import { Book } from 'src/app/shared/book.interface';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss'],
})
export class BuyNowComponent implements OnInit {
  billingForm: FormGroup;
  bookSubs: Subscription;

  constructor(
    private bookfascade: BooksFascade,
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
  }

  // convinence getter for ease access to form field
  get f() {
    return this.billingForm.controls;
  }

  // submission of billing info
  onSubmit() {
    if (!this.billingForm.invalid) {
      this.bookfascade.addUser({ user: this.billingForm.value });
    }
  }

  openSnackBar() {
    if (!this.billingForm.invalid) {
      this._snackBar.open('Successfull', 'close', {
        duration: 2000,
      });
    }
  }
}
