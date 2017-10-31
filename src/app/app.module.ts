import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { InputTextModule, ButtonModule,DataTableModule,SharedModule,DialogModule,
         TieredMenuModule,MenuItem ,GrowlModule ,ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { HomeComponent } from './include/home/home.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { ListBookShelvesComponent } from './include/list-book-shelves/list-book-shelves.component';
import { BookShelveService } from 'app/services/book-shelve.service';
import { NewBookShelfComponent } from './include/new-book-shelf/new-book-shelf.component';
import { EditBookShelfComponent } from './include/edit-book-shelf/edit-book-shelf.component';
import { ViewBookShelfComponent } from './include/view-book-shelf/view-book-shelf.component';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, MenuComponent, HomeComponent, ListBookShelvesComponent, NewBookShelfComponent, EditBookShelfComponent, ViewBookShelfComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,NgbModule.forRoot(),TieredMenuModule,GrowlModule,
    ButtonModule,InputTextModule ,DialogModule,SharedModule, DataTableModule,
    AppRoutesModule
  ],
  providers: [BookShelveService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
