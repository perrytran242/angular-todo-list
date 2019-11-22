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


  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodoItems();
    console.log(this.todos);
  }

  onAddTodoItem(e) {
    e.preventDefault();
    console.log(this.inputElement.nativeElement.value);
  }
}
