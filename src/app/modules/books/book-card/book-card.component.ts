import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Input() bookCoverCssbackground: string;
  constructor() { }

  ngOnInit(): void {
  }

}