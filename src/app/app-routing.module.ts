import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home/home.component';
import {RegisterComponent} from './component/register/register.component';
import {StudentlistComponent} from './component/studentlist/studentlist.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'student',component:StudentlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
