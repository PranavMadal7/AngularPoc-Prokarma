import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BooksFascade } from 'src/app/store/books.fascade';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent implements OnInit {
  collection$: Observable<any>
  User$: Observable<any>;
  constructor(private bookFascade: BooksFascade) {}

  ngOnInit(): void {
    this.collection$ = this.bookFascade.collectionItem$;
    this.User$ = this.bookFascade.User$;
  }
}
