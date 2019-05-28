import { Component, OnInit } from '@angular/core';
import { Student } from './Student'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isavailable: boolean;
  name:string;
  dept:string;
  email:string;
  phone:string;
  course:string;
  student:Student[];


  constructor() {
    this.isavailable = true;
  }

  ngOnInit() {
    this.student=[];
  }
  hideAndShow() {
    this.isavailable=true;
    this.name=null;
    this.dept=null;
    this.email=null;
    this.phone=null;
    this.course=null;
  }

  createStudent()
  {

    this.isavailable = false;
    var studList:Student=new Student(this.name,this.dept,this.email,this.phone,this.course)
     this.student.push(studList);
     console.log(studList.dept);
  }
}
