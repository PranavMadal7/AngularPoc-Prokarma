import { Component, OnInit } from '@angular/core';

import { BooksFascade } from 'src/app/store/books.fascade';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  cartCount: number;
  collectionCount: number;

  constructor(private bookFascade: BooksFascade) {}

  ngOnInit(): void {
    this.bookFascade.cartItems$.subscribe((data) => {
      this.cartCount = data.length;
      if (this.cartCount === 0) {
        this.cartCount = null;
      }
    });

    this.bookFascade.collectionItem$.subscribe((data) => {
      this.collectionCount = data.length;
      if (this.collectionCount === 0) {
        this.collectionCount = null;
      }
    });
  }
}
