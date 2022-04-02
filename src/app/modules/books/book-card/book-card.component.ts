import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Output() onDelete: EventEmitter<number>;
  constructor(private router: Router) { 
    this.onDelete = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  emitDelete(){
    this.onDelete.emit(this.book.id);
  }

  gotToBook(){
    this.router.navigate(['/books', this.book.id]);
  }

  goToEdit(){
    this.router.navigate(['/books', this.book.id, 'edit']);
  }
}
