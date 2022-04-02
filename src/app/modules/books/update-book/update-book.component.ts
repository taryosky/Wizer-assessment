import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/core/models/book';
import { BookToUpdate } from 'src/app/core/models/bookToUpdate';
import { BookServiceService } from 'src/app/core/services/book-service/book-service.service';
import { AppObservables } from 'src/app/core/services/observables/app-observables';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updateForm: FormGroup
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private bookService: BookServiceService,
    private router: Router,
    private appObservables: AppObservables) {}
  bookId: number
  isFvorite: boolean;
  ngOnInit(): void {
    this.bookId = +this.route.snapshot.params['id'];
    this.getBook();
  }

  getBook(){
    this.bookService.getBookById(this.bookId).subscribe(
      (book: Book) => {
        console.log(book)
        this.isFvorite = book.isFvorite;
        this.updateForm = this.fb.group({
          id: [this.bookId],
          name: [book.name],
          imageUrl: [book.imageUrl],
          isFvorite: [book.isFvorite],
          description: [book.description]
        });
      }
    )
  }

  updateBook(): boolean{
    if(this.updateForm.invalid){
      return false;
    }
    let book = <BookToUpdate>this.updateForm.value;
    console.log(book)
    this.bookService.updateBook(book).subscribe(
      (d) => {
        this.appObservables.notifier.next({severity:'success', detail:'Book has been updated'})
        this.updateForm.reset();
        this.router.navigate(['/books', this.bookId]);
      },
      (error) => {
        this.appObservables.notifier.next({severity:'error', detail:'An error occured please try again'});
      }
    )
  }

}
