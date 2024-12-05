/** 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,  // Register component declaration
    UserListComponent,  // User list component declaration
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Import FormsModule for template-driven forms
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module'; // <-- Ensure this import

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // <-- Add routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



