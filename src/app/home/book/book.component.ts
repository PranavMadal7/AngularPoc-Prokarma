import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from 'src/app/shared/book.interface';
import { BooksFascade } from 'src/app/store/books.fascade';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  selectedBook$: Observable<Book>;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private booksFacade: BooksFascade
  ) {}

  ngOnInit() {
    let bookId: string;
    this.activateRoute.params.subscribe((data) => {
      bookId = data.id;
    });
    if (bookId) {
      this.selectedBook$ = this.booksFacade.AllBooks$.pipe(
        map((books) => books.filter((book) => book.id === bookId)[0])
      );
    }
  }

  addToCart() {
    this.selectedBook$.subscribe((data) =>
      this.booksFacade.addToCart({ book: data })
    );
    this.router.navigate(['/addToCart']);
  }

  buyNow() {
    this.selectedBook$.subscribe((data) =>
      this.booksFacade.addToCollection({ book: data })
    );
    this.router.navigate(['/buyNow']);
  }
}
