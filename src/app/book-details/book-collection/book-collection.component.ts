import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, User } from 'src/app/shared/book.interface';

import { BooksFascade } from 'src/app/store/books.fascade';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent implements OnInit {
  collection$: Observable<Book[]>;
  User$: Observable<User>;

  constructor(private bookFascade: BooksFascade) {}

  ngOnInit(): void {
    this.collection$ = this.bookFascade.collectionItem$;
    this.User$ = this.bookFascade.User$;
  }
}
