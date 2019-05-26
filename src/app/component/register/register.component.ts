import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isavailable: boolean;
  name: string;
  email: string;
  phone: number;
  course: string;

  constructor() {
    this.isavailable = true;
  }

  ngOnInit() {
  }
  hideAndShow() {
    this.isavailable = false;
  }

}
