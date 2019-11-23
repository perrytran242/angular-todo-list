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
    console.log('on init:', this.todos);
  }

  onAddTodoItem(e) {
    e.preventDefault();
    this.todoItemToAdd = this.inputElement.nativeElement.value;
    this.todoService.addTodoItem(this.newTodoItem, false);
    this.newTodoItem = '';
  }

  onReceievedCompletedTodo(e) {
    this.todoService.completeTodoItem(e);
  }

  onDisplayAllTodos() {
    this.todos = this.todoService.getTodoItems();
    console.log('display all todos:', this.todos);
  }
  onDisplayActiveTodos() {
  }

  onDisplayCompletedTodos() {
    this.todos = this.todoService.getCompletedTodoItems();
    console.log(this.todos);
  }

}
