import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  cartCount: number;
  collectionCount: number;
  cartSubs: Subscription;
  collectionSubs: Subscription;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.collectionSubs = this.bookService
      .getBookCollectionListener()
      .subscribe((res) => {
        this.collectionCount = res.length;
      });

    this.cartSubs = this.bookService.getCartListener().subscribe((res) => {
      this.cartCount = res.length;
      if (this.cartCount === 0) {
        this.cartCount = null;
      }
    });
  }

  ngOnDestroy() {}
}
