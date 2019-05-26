import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.less']
})
export class StudentlistComponent implements OnInit {
  student=[{name:"sandeep",age:23,qualification:"BE"},
          {name:"saran",age:23,qualification:"BE"},
          {name:"mei",age:20,qualification:"BE"},
          {name:"roshan",age:22,qualification:"BE"},
          {name:"dina",age:21,qualification:"BE"}]
  constructor() { }

  ngOnInit() {
  }

}
