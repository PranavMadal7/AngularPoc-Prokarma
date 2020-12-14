import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SearchComponent } from './search/search.component';
import { BookComponent } from './book/book.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchComponent, BookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [SearchComponent, BookComponent],
})
export class HomeModule {}
