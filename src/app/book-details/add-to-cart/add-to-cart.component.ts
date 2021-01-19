import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book.interface';

import { BooksFascade } from 'src/app/store/books.fascade';
import { Cart } from 'src/app/store/cart.reducer';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  books: Book[] = [];
  // bookSubs: Subscription;
  count: number;
  cartItems$: Observable<any[]>;
  constructor(private bookFascade: BooksFascade, private router: Router) {}

  ngOnInit(): void {
    this.cartItems$ = this.bookFascade.cartItems$;
  }

  // deletion of book from cart
  deleteBook(book) {
    this.bookFascade.removeFromCart(book.id);
  }

  // proceed to purchase from cart
  purchase(book) {
    this.bookFascade.addToCollection({ book });
    this.router.navigate(['/buyNow']);
  }
}
