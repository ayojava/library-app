import { Component, OnInit, ViewChild } from '@angular/core';
import { BookShelve } from 'app/model/bookShelve';
import { Location } from '@angular/common';
import {Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BookShelveService } from 'app/services/book-shelve.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-book-shelf',
  templateUrl: './new-book-shelf.component.html',
  styleUrls: ['./new-book-shelf.component.css']
})
export class NewBookShelfComponent implements OnInit {

  private growlMsgs: Message[] = [];
  private bookShelveObj : BookShelve; ;
  private errorMessage : string;
  private loadingImage : boolean;
  private formSubmitted : boolean;

  //@ViewChild('newBookShelveForm') newBookShelfForm : any;
  
  constructor(private bookShelveService : BookShelveService,private location: Location,
    private messageService: MessageService , private router: Router) { }

  ngOnInit() {
    this.bookShelveObj = new BookShelve();  
  }

  goBack(): void {
    this.location.back();
  }

  showErrorMsg() : void{
    this.messageService.add({severity:'error', summary:'Error Message', detail:'Save Operation Not Successfull'});
  }

  addBook(newBookShelveForm : NgForm) :void{
    this.formSubmitted = true;
    if(newBookShelveForm.valid){
      this.bookShelveService.addBookShelf(this.bookShelveObj).subscribe(
        success => {this.handleSuccess(success)},
        error =>{this.handleError(error)},
        ()=>{this.handleComplete()}
      );
      
    }
   
  }

  handleSuccess(success : any) : void {
    this.formSubmitted = false;
    this.router.navigate(['/listBookShelves']);
  }

  handleComplete():void {
   
  }

  handleError(error : any){
    this.errorMessage = error;
    this.loadingImage = false;
    this.showErrorMsg() ;
  }
}

/**
 * https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example
 */