import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() completedTodoItem = new EventEmitter();
  completeTodoItem = false;

  constructor() { }

  ngOnInit() {
  }

  onCompleteTodoItem(todo) {
    this.completeTodoItem = !this.completeTodoItem;
    todo.complete = this.completeTodoItem;

    this.completedTodoItem.emit(todo);
  }
}
