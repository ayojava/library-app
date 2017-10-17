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
         TieredMenuModule,MenuItem } from 'primeng/primeng';
import { HomeComponent } from './include/home/home.component';
import { AppRoutesModule } from './app-routes/app-routes.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, MenuComponent, HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,NgbModule.forRoot(),TieredMenuModule,
    ButtonModule,InputTextModule ,DialogModule,SharedModule, DataTableModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
