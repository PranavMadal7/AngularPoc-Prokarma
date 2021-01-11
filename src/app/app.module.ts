import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { HomeModule } from './home/home.module';
import { BookDetailsModule } from './book-details/book-details.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { metaReducers, reducers } from './store/books.selector';
import { BooksFascade } from './store/books.fascade';
import { BooksEffects } from './store/books.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutingModule,
    BookDetailsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([BooksEffects])
  ],
  providers: [BooksFascade],
  bootstrap: [AppComponent],
})
export class AppModule {}
