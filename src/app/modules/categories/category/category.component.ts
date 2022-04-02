import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { AppObservables } from 'src/app/core/services/observables/app-observables';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category
  @Output() close: EventEmitter<boolean>;
  constructor(private appObservables: AppObservables) {
    this.close = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit(true);
  }

}
