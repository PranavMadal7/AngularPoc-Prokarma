import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Book, SearchBook } from 'src/app/shared/book.interface';
import { BooksFascade } from 'src/app/store/books.fascade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchTerm: string;
  bookItems: any;

  constructor(private router: Router, private bookFascade: BooksFascade) {}

  ngOnInit(): void {
    this.bookFascade.AllBooks$.subscribe((res) => {
      this.bookItems = res['items'];
    });

    this.bookFascade.searchTerm$.subscribe((data) => {
      this.searchTerm = data;
    });

    this.searchForm = new FormGroup({
      searchBooks: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit = () => {
    this.bookFascade.loadBooks({
      searchTerm: this.searchForm.value['searchBooks'],
    });
  };

  onBookSelect(bookItem: Book) {
    this.router.navigate(['/book', bookItem.id]);
  }
}
