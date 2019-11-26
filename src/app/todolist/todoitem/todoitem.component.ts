
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() completedTodoItem = new EventEmitter();
  @Output() deleteTodoItem = new EventEmitter();
  completeTodoItem = false;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.todoItem);
  }

  onCompleteTodoItem(todo) {
    this.completeTodoItem = !this.completeTodoItem;
    todo.complete = this.completeTodoItem;
    this.completedTodoItem.emit(todo);
  }

  onDeleteTodo(todo) {
    this.deleteTodoItem.emit(todo);
  }

  navigateToTodoInfo() {
    this.router.navigate([`todo-list/${this.todoItem.id}`]);

  }
}
