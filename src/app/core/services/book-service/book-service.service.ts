import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators'
import { Book } from '../../models/book';
import { BookToUpdate } from '../../models/bookToUpdate';
import { CategoryServiceService } from '../catetory-service/category-service.service';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  baseUrl = environment.apiUrl+'books/';
  constructor(private httpClient: HttpClient, private categoryService: CategoryServiceService) { }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.baseUrl);
  }

  deleteBook(id: number){
    return this.httpClient.delete(this.baseUrl+id);
  }

  getBookById(id: number){
    return this.httpClient.get<Book>(this.baseUrl+id)
    .pipe(
      concatMap(book => this.categoryService.getCategoryById(book.categoryId).pipe(
        
        map((cat: Category) => {
          return {name: book.name, id: book.id, categoryId: cat.id, category: cat.name, imageUrl: book.imageUrl, isFvorite: book.isFvorite, createdAt: book.createdAt, description: book.description}
         })
      ))
    )
  }

  updateBook(book: BookToUpdate){
    return this.httpClient.put(this.baseUrl+book.id, JSON.stringify(book));
  }

  addBook(book: FormData){
    return this.httpClient.post(this.baseUrl, JSON.stringify(book));
  }

}
