import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { RoutingModule } from '../routing/routing.module';



@NgModule({
  declarations: [BuyNowComponent, AddToCartComponent, BookCollectionComponent],
  imports: [
    CommonModule,
    RoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [BuyNowComponent, AddToCartComponent, BookCollectionComponent]
})
export class BookDetailsModule { }
