import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { BookServer } from "../../dataServer/Datas";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  bookName:string = "";
  bookPrice:string="";
  Type:string="";

  constructor(
    private bookServer:BookServer,
    public http:Http,
    public jsonp:Jsonp
  ) { }

  ngOnInit() {
    this.http.get("/api/bookApi/bookType.php").subscribe((data)=>{
      this.bookServer.bookType=data.json().result;
    })
    this.http.get("/api/bookApi/book.php").subscribe((data)=>{
      this.bookServer.books=data.json().result;
    })
}
loadBook(){
  let url = "/api/bookApi/book.php";
  let respone = this.http.get(url,{
      search:{
          bookName:this.bookName,
          bookPrice:this.bookPrice,
          bookType:this.Type
      }
  });        
  respone.subscribe((data)=>{
      this.bookServer.books = data.json().result;
      console.log(data.json());
  });
}

}
