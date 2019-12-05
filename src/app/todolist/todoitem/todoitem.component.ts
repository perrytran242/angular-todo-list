import { Component, OnInit, Input, Output, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit, OnChanges {
  @Input() todoItem: any;
  @Output() completedTodoItem = new EventEmitter();
  @Output() deleteTodoItem = new EventEmitter();


  modalRef: BsModalRef;
  completeTodoItem = false;
  completed = false;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes) { }

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

  onOpenDeleteModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
