import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnDestroy {
  books: any[] = [];
  bookSubs: Subscription;
  count: number;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookSubs = this.bookService.getCartListener().subscribe(res => {
      this.books = res;
    });

  }

  // deletion of book from cart
  deleteBook(book) {
    this.bookService.removeCartBook(book);
    this.bookSubs = this.bookService.getCartListener().subscribe(res => {
      this.books = res;
    });
  }

  // proceed to purchase from cart
  purchase(book) {
    this.bookService.bookItem.next(book);
    this.router.navigate(['/buyNow']);
  }

  // unsubscribe of subject subscription
  ngOnDestroy() {
    this.bookSubs.unsubscribe();
  }

}
