import { Component, OnInit } from '@angular/core';
import { BookServer } from "../../../dataServer/Datas";
import { Http, Jsonp } from '@angular/http';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  

  constructor(
    private bookServer:BookServer,
    public http:Http,
    public jsonp:Jsonp
  ) { }

  ngOnInit() {
 
  }

}
