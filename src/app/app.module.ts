import { AppRoutingModule } from './app-routing.module';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todolist/todoitem/todoitem.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TodoinformationComponent } from './todolist/todoinformation/todoinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoitemComponent,
    TodoinformationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
