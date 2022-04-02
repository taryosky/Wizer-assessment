import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [
    BooksComponent,
    NewBookComponent,
    BookCardComponent,
    UpdateBookComponent,
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    CoreModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  providers:[ConfirmationService, MessageService]
})
export class BooksModule { }
