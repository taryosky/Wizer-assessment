import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    BooksComponent,
    NewBookComponent,
    BookCardComponent,
    UpdateBookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    CoreModule,
  ]
})
export class BooksModule { }
