import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { BookServiceService } from 'src/app/core/services/book-service/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookServiceService) { }
  books: Book[];
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooksList().subscribe(
      (books: Book[]) =>{
        this.books = books;
      }
    );
  }

}
