import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../register/Student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.less']
})
export class StudentlistComponent implements OnInit {
  @Input() student:Student[]
  constructor() { 
  }

  ngOnInit() {}
}
