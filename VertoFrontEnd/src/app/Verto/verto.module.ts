import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './Account/registration/registration.component';
import { LoginComponent } from './Account/login/login.component';
import { BooksComponent } from './Book/books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'register', component: RegistrationComponent ,
        // resolve: { news: FilterNewsPaginatedResolver }
      },
      {
        path: 'login', component: LoginComponent ,
        // resolve: { news: FilterNewsPaginatedResolver }
      },
      {
        path: 'books', component: BooksComponent ,
        // resolve: { news: FilterNewsPaginatedResolver }
      },

    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    RouterModule,
  ],
})
export class VertoModule { }
