import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
   name:string

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }
  navigater(name:String)
  {
    this.router.navigate(['/home/name'])
  }

}
