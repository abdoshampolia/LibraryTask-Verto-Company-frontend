import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDto } from './_models/book-dto';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://localhost:7180/api/Books';

  constructor(private http: HttpClient) { }
  getBooks(query:{}): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(`${this.baseUrl}/FilterBooksPaginated`,query);

  }
}
