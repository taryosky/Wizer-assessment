import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
import { CategoryServiceService } from 'src/app/core/services/catetory-service/category-service.service';
import { AppObservables } from 'src/app/core/services/observables/app-observables';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  updateForm: FormGroup;
  @Input() category: Category;
  constructor(private fb: FormBuilder,
    private appObservables: AppObservables,
    private categoryService: CategoryServiceService) {
      this.updateForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        isFvorite: [false],
        id: ['']
      })

      this.appObservables.updateCategoryNotifier.subscribe(
        () => {
          this.updateForm.patchValue({
            name: this.category.name,
            description: this.category.description,
            isFvorite: this.category.isFvorite,
            id: this.category.id
          })
        }
      )
     }

  ngOnInit(): void {
    
  }

  updateCategory(){
    if(this.updateForm.invalid){
      return false;
    }

    this.categoryService.updateCategory(this.updateForm.value).subscribe(
      () => {
        this.appObservables.refreshCategoriesLise.next(true);
        this.appObservables.notifier.next({severity: 'success', detail: 'Category has been updated'});
      }
    )

  }

}
