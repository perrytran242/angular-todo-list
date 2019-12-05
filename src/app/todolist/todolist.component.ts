import { TodoService } from './../services/todo.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


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
  activeTab = false;
  localTodoItems;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodoItems();

    // this.todoService.getLocalTodoItems().subscribe( res => {
    //   this.todos = res;

    //   console.log('local todo items:', this.localTodoItems);
    // });

    const todos = this.todoService.getLocalTodoItems().pipe(map( data => {
      return data;
    }));

    todos.subscribe(data => this.todos = data);
  }

  onAddTodoItem(e) {
    e.preventDefault();
    this.todoItemToAdd = this.inputElement.nativeElement.value;
    this.todoService.addTodoItem(this.newTodoItem, false);
    this.newTodoItem = '';

    if ( this.activeTab) {
      this.todos = this.todoService.getActiveTodos();
    }
  }

  onReceievedCompletedTodo(e) {
    this.todoService.completeTodoItem(e);
  }

  onDisplayAllTodos() {
    this.todos = this.todoService.getTodoItems();
  }

  onDisplayActiveTodos() {
    this.activeTab = true;
    this.todos = this.todoService.getActiveTodos();
  }

  onDisplayCompletedTodos() {
    this.activeTab = false;
    this.todos = this.todoService.getCompletedTodoItems();
  }

  onReceievedDeletedTodo(e) {
    const deleteTodo = e;
    this.todos = this.todoService.deleteTodo(deleteTodo);
  }
}
