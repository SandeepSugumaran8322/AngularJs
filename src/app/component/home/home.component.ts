import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  name:string;

  constructor(private route: Router) {
   }
  ngOnInit() {
  }
  regNavigator() {
    this.route.navigate(['/register'])
  }
  goBack()
  {
    this.route.navigate([''])
  }
}
