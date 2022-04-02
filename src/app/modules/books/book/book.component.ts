import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book';
import { BookServiceService } from 'src/app/core/services/book-service/book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;
  bookId: number
  constructor(private bookService: BookServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    this.getBook();
    console.log(this.bookId)
  }

  getBook(){
    this.bookService.getBookById(this.bookId).subscribe(
      (book: Book) => {
        this.book = book;
        //console.log(book)
      }
    )
  }

}
