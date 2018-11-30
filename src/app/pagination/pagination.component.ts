import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pagenateArr = [];

  constructor() { }

  ngOnInit() {
    this.setPagenateArr();
    console.log(this.pagenateArr);
  }

  setPagenateArr(){
    for (let i = 0; i < 100; i++) {
      let arr = {
        name : 'A_'+i,
        number : i+5
      }
      this.pagenateArr.push(arr);
    }
  }
}
