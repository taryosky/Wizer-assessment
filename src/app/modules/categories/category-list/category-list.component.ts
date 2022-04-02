import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { CategoryServiceService } from 'src/app/core/services/catetory-service/category-service.service';
import { AppObservables } from 'src/app/core/services/observables/app-observables';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryServiceService,
    private appObservables: AppObservables,
    private confirmationService: ConfirmationService) { }
  categories: Category[];
  category: Category;
  counter = 0
  showDialog: boolean
  isViewMode: boolean;
  isNewMode: boolean;
  isEditMode: boolean;
  ngOnInit(): void {
    this.appObservables.refreshCategoriesLise.subscribe(
      (t) => {
        this.resetModes();
        this.getCategories();
      }
    )
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    )
  }

  viewCategory(categoryId: number){
      this.setCatetory(categoryId);
      this.isViewMode = true;
      this.showDialog = true;
  }

  trigerEdit(categoryId: number){
    this.setCatetory(categoryId);
    this.appObservables.updateCategoryNotifier.next(true)
    this.isEditMode = true;
    this.showDialog = true;
  }

  trigerNewCategory(){
    this.isNewMode = true;
    this.showDialog = true;
  }

  deleteCategory(id: number){
      this.categoryService.deleteCategory(id).subscribe(
        ()  => {
          this.appObservables.notifier.next({
            severity: 'success', detail: 'Category deleted'
          });
          this.getCategories();
        }
      )
  }

  confirmDelete(id: number){
    console.log(id);
    this.confirmationService.confirm({
      header: "Delete Category",
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete this category?',
            accept: () => {
                this.deleteCategory(id);
            }
    })
  }

  setCatetory(id: number){
    this.category = this.categories.find(cat => cat.id == id);
  }

  resetModes(){
    this.isEditMode = false;
    this.isNewMode = false;
    this.isViewMode = false;
    this.showDialog = false;
  }
}
