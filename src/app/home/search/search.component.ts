import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services/api.service';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  bookItems: any[];

  constructor(private apiService: ApiService, private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchBooks: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit = () => {
    this.apiService.onSearch(this.searchForm.value['searchBooks'])
      .subscribe((res) => {
        this.bookItems = res.items;
      });
  };

  onBookSelect(bookItem) {
    this.bookService.bookItem.next(bookItem);
    this.bookService.booksItems = bookItem;
    this.router.navigate(['/book']);
  }
}
