import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },

  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'userdetails',
    component:UserdetailsComponent,
    pathMatch:'full'
  },
  {
    path:'personaldetails',
    component:PersonaldetailsComponent,
    pathMatch:'full'
  },
  {
    path:'productdetails',
    component:ProductdetailsComponent,
    pathMatch:'full'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
