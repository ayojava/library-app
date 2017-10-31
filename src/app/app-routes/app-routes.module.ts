import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/include/home/home.component';
import { ListBookShelvesComponent } from 'app/include/list-book-shelves/list-book-shelves.component';
import { NewBookShelfComponent } from 'app/include/new-book-shelf/new-book-shelf.component';
import { EditBookShelfComponent } from 'app/include/edit-book-shelf/edit-book-shelf.component';
import { ViewBookShelfComponent } from 'app/include/view-book-shelf/view-book-shelf.component';

const PROJECT_ROUTES : Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component : HomeComponent},
  {path:'listBookShelves', component : ListBookShelvesComponent},
  {path:'newBookShelf', component : NewBookShelfComponent},
  {path:'editBookShelf/:bookShelfId', component : EditBookShelfComponent},
  {path:'viewBookShelf/:bookShelfId', component : ViewBookShelfComponent},
  {path: '**', component : HomeComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(PROJECT_ROUTES)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
