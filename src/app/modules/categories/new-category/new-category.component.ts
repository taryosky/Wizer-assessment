import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from 'src/app/core/services/catetory-service/category-service.service';
import { AppObservables } from 'src/app/core/services/observables/app-observables';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  newCategoryForm: FormGroup;
  constructor(private fb: FormBuilder,
    private appObservables: AppObservables,
    private categoryService: CategoryServiceService) {
      this.newCategoryForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        isFvorite: [false]
      })

     }
    

  ngOnInit(): void {
    
  }

  addCategory(){
    if(this.newCategoryForm.invalid){
      return false;
    }

    this.categoryService.addCategory(this.newCategoryForm.value).subscribe(
      () => {
        this.appObservables.refreshCategoriesLise.next(true);
        this.appObservables.notifier.next({severity: 'success', detail: 'Category has been added'});
      }
    )

  }

  closeModal(){
    this.close.emit(true);
  }

}
