import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RegisterComponent } from './components/register/register.component';

import {MatToolbarModule} from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    UserdetailsComponent,
    PersonaldetailsComponent,
    ProductdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
