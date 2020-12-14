import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { BookComponent } from '../home/book/book.component';
import { SearchComponent } from '../home/search/search.component';

const routes: Routes = [
  { path: '',redirectTo:'search', pathMatch: 'full'},
  {
    path: 'search',
    component: SearchComponent,
  },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
