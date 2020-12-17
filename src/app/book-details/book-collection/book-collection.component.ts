import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent implements OnInit {
  books: any[] = [];
  bookSubs: Subscription;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookSubs = this.bookService
      .getBookCollectionListener()
      .subscribe((res) => {
        this.books = res;
      });
  }
}
