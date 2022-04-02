import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  baseUrl = environment.apiUrl+'books/';
  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.baseUrl);
  }
}
