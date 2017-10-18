import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/include/home/home.component';
import { ListBookShelvesComponent } from 'app/include/list-book-shelves/list-book-shelves.component';

const PROJECT_ROUTES : Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component : HomeComponent},
  {path:'listBookShelves', component : ListBookShelvesComponent},
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
