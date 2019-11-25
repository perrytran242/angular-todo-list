import { TodoinformationComponent } from './todolist/todoinformation/todoinformation.component';
import { TodolistComponent } from './todolist/todolist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  // { path: '**', component: TodolistComponent},
  { path: '', redirectTo: '/heros', pathMatch: 'full' },
  { path: 'todo-list', component: TodolistComponent },
  { path: 'todo-list/:id', component: TodoinformationComponent },
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
