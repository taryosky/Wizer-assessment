import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Book } from 'src/app/core/models/book';
import { BookToAdd } from 'src/app/core/models/book-to-add';
import { CategoryCard } from 'src/app/core/models/category-card';
import { BookServiceService } from 'src/app/core/services/book-service/book-service.service';
import { CategoryServiceService } from 'src/app/core/services/catetory-service/category-service.service';
import { AppObservables } from 'src/app/core/services/observables/app-observables';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  newBookForm: FormGroup
  categories: CategoryCard[];
  coverPhoto: File;
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private bookService: BookServiceService,
    private categoryService: CategoryServiceService,
    private router: Router,
    private appObservables: AppObservables) {
      this.newBookForm = this.fb.group({
        name: ['', Validators.required],
        imageUrl: ['', Validators.required],
        isFvorite: [false, Validators.required],
        description: ['', Validators.required],
        categoryId: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.getCagegories();
  }

  getCagegories(){
    this.categoryService.getCategories().subscribe(
      (categories: CategoryCard[]) => {
        console.log(categories)
        this.categories = categories;
      }
    )
  }

  updateFile(event){
    this.coverPhoto = event.target.files[0];
  }

  addBook(){
    if(this.newBookForm.invalid){
      return false;
    }

    let book = <BookToAdd>this.newBookForm.value;
    let formData = new FormData();
    formData.append('name', book.name);
    formData.append('categoryId', book.categoryId+'');
    formData.append('description', book.description);
    formData.append('image', this.coverPhoto);
    console.log(book);
    this.bookService.addBook(formData).subscribe(
      (book: Book) =>{
        this.appObservables.notifier.next({severity:'success', detail:'Book has been added'})
        this.newBookForm.reset();
        this.router.navigate(['/books', book.id]);
      },
      (error) => {
        this.appObservables.notifier.next({severity:'error', detail:'An error occured please try again'})
      }
    )
  }
}
