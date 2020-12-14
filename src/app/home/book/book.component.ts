import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  book: any;
  item: string;
  bookSubs: Subscription;
  constructor(private bookService: BookService) {
    this.bookSubs = this.bookService.getBookItemListener().subscribe((res) => {
      debugger
      console.log('hihiad', res);
      this.item = res.volumeInfo.title;
      console.log(this.item);
    });
   }

  ngOnInit() {
    debugger
    console.log('inside book component');
    // this.bookSubs = this.bookService.getBookItemListener().subscribe((res) => {
    //   debugger
    //   console.log('hihiad', res);
    //   this.item = res.volumeInfo.title;
    //   console.log(this.item);
    // });

    // this.book = this.bookService.booksItems;
    // this.item = this.book.volumeInfo.title;

  }

  ngOnDestroy() {
    debugger
    this.bookSubs.unsubscribe();
  }
}
