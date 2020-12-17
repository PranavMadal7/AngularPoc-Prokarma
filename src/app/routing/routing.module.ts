import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from '../book-details/add-to-cart/add-to-cart.component';
import { BookCollectionComponent } from '../book-details/book-collection/book-collection.component';
import { BuyNowComponent } from '../book-details/buy-now/buy-now.component';

import { BookComponent } from '../home/book/book.component';
import { SearchComponent } from '../home/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'book', component: BookComponent },
  { path: 'buyNow', component: BuyNowComponent },
  { path: 'addToCart', component: AddToCartComponent },
  { path: 'myCollection', component: BookCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
