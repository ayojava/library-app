import { Component, OnInit } from '@angular/core';
import { BookShelveService } from 'app/services/book-shelve.service';
import { BookShelve } from 'app/model/bookShelve';

@Component({
  selector: 'app-list-book-shelves',
  templateUrl: './list-book-shelves.component.html',
  styleUrls: ['./list-book-shelves.component.css']
})
export class ListBookShelvesComponent implements OnInit {

  private bookShelvesList : BookShelve[];

  constructor(private bookShelveService : BookShelveService) { 

  }

  ngOnInit() {
    this.bookShelveService.getBookShelvesList().subscribe(bookShelveJSONList => {
        this.bookShelvesList = bookShelveJSONList;
      });
    /*
    this.bookShelveService.getBookShelvesList().subscribe(
      jsonResponse => { console.log('Response Output :::: ' , jsonResponse);},
      jsonError => {console.log('Error Output :::: ' , jsonError);},
      ()=> {console.log('done!');}
    );
    */
  }

}
