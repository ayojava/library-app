import { Book } from "app/model/book";


export class BookShelve{

    constructor(public id:number,public shelveName: string , public shelveCode: string, 
        public description : string, public allBooks :Array<Book> ,public createDate : string){

    }
}