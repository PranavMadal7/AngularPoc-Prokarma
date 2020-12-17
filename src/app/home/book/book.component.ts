import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  book: any;
  item: string;
  bookSubs: Subscription;
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.bookSubs = this.bookService.getBookItemListener().subscribe((res) => {
      this.book = res;
    });
  }

  addToCart() {
    this.bookService.addCart(this.book);
    this.bookService.bookItem.next(this.book);
    this.router.navigate(['/addToCart']);
  }

  buyNow() {
    this.router.navigate(['/buyNow']);
  }

  ngOnDestroy() {
    this.bookSubs.unsubscribe();
  }
}
