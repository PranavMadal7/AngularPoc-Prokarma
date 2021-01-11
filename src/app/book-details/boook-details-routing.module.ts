import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { BuyNowComponent } from "./buy-now/buy-now.component";

const routes: Routes = [
  { path: 'buyNow', component: BuyNowComponent },
  { path: 'addToCart', component: AddToCartComponent },
  { path: 'myCollection', component: BookCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailsRoutingModule {}
