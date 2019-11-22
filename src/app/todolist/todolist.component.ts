import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todos: any;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodoItems();
    console.log(this.todos);
  }
}
