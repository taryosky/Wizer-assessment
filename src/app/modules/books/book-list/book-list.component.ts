import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Book } from 'src/app/core/models/book';
import { BookServiceService } from 'src/app/core/services/book-service/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookServiceService, 
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }
  books: Book[];
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooksList().subscribe(
      (books: Book[]) =>{
        this.books = books;
        console.log(books)
      }
    );
  }

  confirmDelete(id: number){
    console.log(id);
    this.confirmationService.confirm({
      header: "Delete Book",
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete this book?',
            accept: () => {
                this.deleteBook(id);
            }
    })
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(
      () => {
        this.getBooks();
        this.messageService.add({severity:'success', detail:'Book has been deleted'});
      }
    );
  }
}
