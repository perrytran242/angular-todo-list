import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';



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
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  onCompleteTodoItem(todo) {
    this.completeTodoItem = !this.completeTodoItem;
    todo.complete = this.completeTodoItem;
    this.completedTodoItem.emit(todo);
  }

  onDeleteTodo(todo) {
    this.deleteTodoItem.emit(todo);
  }
}
