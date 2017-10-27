import { BookShelve } from "app/model/bookShelve";


export class Book{

    constructor(public bookId:number, public bookName: string , public bookAuthor : string,
    public publisherName: string, public bookShelveId: number, public createDate : string){}
}