import { Component, OnInit } from '@angular/core';
import { BookShelveService } from 'app/services/book-shelve.service';
import { BookShelve } from 'app/model/bookShelve';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-list-book-shelves',
  templateUrl: './list-book-shelves.component.html',
  styleUrls: ['./list-book-shelves.component.css']
})
export class ListBookShelvesComponent implements OnInit {

  private bookShelvesList : BookShelve[];

  private errorMessage : string;

  private loadingImage : boolean;

  msgs: Message[] = [];

  constructor(private bookShelveService : BookShelveService,private  messageService: MessageService) { 

  }

  ngOnInit() {
    this.bookShelveService.getBookShelvesList().subscribe(
      success => {this.handleSuccess(success)},
      error =>{this.handleError(error)},
      ()=>{this.handleComplete()}
    );
  }

  handleError(error : any){
    this.errorMessage = error;
    this.loadingImage = false;
    this.messageService.add({severity:'error', summary:'Error Message', detail:'The Rest Server is offline'});
  }

  handleSuccess(success : any) : void{
    this.bookShelvesList = success;
  }

  handleComplete():void{
    this.loadingImage = false;
  }

  selectedBookShelf(bookShelve : BookShelve) : void{
    
  }
}
