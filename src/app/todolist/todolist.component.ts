import { TodoService } from './../services/todo.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @ViewChild('inputElement') inputElement: ElementRef;
  todos: any;
  todoItemToAdd: any;
  newTodoItem = '';

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodoItems();
  }

  onAddTodoItem(e) {
    e.preventDefault();
    this.todoItemToAdd = this.inputElement.nativeElement.value;
    this.todoService.addTodoItem(this.newTodoItem, false);
    this.newTodoItem = '';
  }

  onReceievedCompletedTodo(e) {
    // console.log(e);

    this.todoService.completeTodoItem(e);

  }
}
