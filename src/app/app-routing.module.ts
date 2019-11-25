import { TodolistComponent } from './todolist/todolist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';



const appRoutes: Routes = [
  { path: '**', component: TodolistComponent},
  { path: 'todo-list', component: TodolistComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
