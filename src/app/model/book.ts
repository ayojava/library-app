import { BookShelve } from "app/model/bookShelve";


export class Book{

    constructor(public id:number, public bookName: string , public bookAuthor : string,
    public publisherName: string, public bookShelve: BookShelve, public createDate : Date){}
}