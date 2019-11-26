import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-todoinformation',
  templateUrl: './todoinformation.component.html',
  styleUrls: ['./todoinformation.component.scss']
})
export class TodoinformationComponent implements OnInit {
  todoId: number;
  todoList: any;
  todoIndex: any;
  todoItem: any;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService

  ) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodoItems();

    this.route.params.subscribe( param => {
      this.todoId = parseInt(param.id, null);


      this.todoIndex = this.todoList.findIndex(todoItem => {
        return todoItem.id === this.todoId;
      });

      this.todoItem = this.todoList[this.todoIndex];
    });
  }

}
