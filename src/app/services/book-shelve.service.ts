import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BookShelve } from 'app/model/bookShelve';
import { Book } from 'app/model/book';

@Injectable()
export class BookShelveService {

  //private bookShelvesBaseUrl: string ="http://localhost:8080/demo/bookShelve/all";
  private bookShelvesBaseUrl: string ="http://localhost:3000/bookShelves/";

  constructor(private bookShelveHttp: Http){
    
  }

  getBookShelvesList() : Observable<BookShelve[]>{
    return this.bookShelveHttp.get(this.bookShelvesBaseUrl,{headers : this.getJsonHeader()}).map(
      (response : Response)=>{
        return response.json().map(aResponse => {
          let bookList : Book[] = [];
          aResponse.allBooks.forEach(aBookJSON =>{
            let aBook = new Book(Number.parseInt(aBookJSON.id) ,aBookJSON.bookName , aBookJSON.bookAuthor ,aBookJSON.publisherName,
            Number.parseInt(aResponse.id ),aBookJSON.createDate);
            bookList.push(aBook);
          });
          
          return new BookShelve(Number.parseInt(aResponse.id ),aResponse.shelveName ,aResponse.shelveCode ,aResponse.description,
          bookList , aResponse.createDate);
        });
      }
    );  
  }

  private getJsonHeader () : Headers {
    let aHeader = new Headers();
    aHeader.append('Accept','application/json');
    return aHeader;
  }

}
