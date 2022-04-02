import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CategoryComponent } from './category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    NewCategoryComponent,
    UpdateCategoryComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ]
})
export class CategoriesModule { }
