import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  baseUrl = environment.apiUrl+'categories/';
  constructor(private httpClient: HttpClient) { }

  getCategories(){
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  getCategoryById(id: number){
    return this.httpClient.get(this.baseUrl+id);
  }

  updateCategory(category: any){
    return this.httpClient.put(this.baseUrl+category.id, JSON.stringify(category));
  }

  addCategory(category: any){
    return this.httpClient.post(this.baseUrl, JSON.stringify(category));
  }

  deleteCategory(id: number){
    return this.httpClient.delete(this.baseUrl+id);
  }

}
