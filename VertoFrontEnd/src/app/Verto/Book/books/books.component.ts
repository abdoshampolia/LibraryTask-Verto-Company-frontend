import { Component } from '@angular/core';
import { BookDto } from '../_models/book-dto';
import { BookService } from '../book.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  displayedColumns: string[] = ['iSBN', 'bookName', 'autherName', 'bublishDate', 'count', 'isActive'];
  books: BookDto[] = [];
  dataSource: MatTableDataSource<BookDto> | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks({}).subscribe(response => {
      this.books = response;
    });
  }
}
