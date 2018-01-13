import { Component, OnInit } from '@angular/core';
import { BookServer } from '../../dataServer/Datas';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private bookServer:BookServer
  ) { }

  ngOnInit() {
  }

}
