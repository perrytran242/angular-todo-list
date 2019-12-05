import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  configUrl = '/api/todo-list';

  todoItems = [
    {id: 1, todo: 'walk the dog', complete: false},
    {id: 2, todo: 'go to gym', complete: false},
    {id: 3, todo: 'go to doctor', complete: false},
  ];

  constructor(
    private http: HttpClient
  ) { }

  getTodoItems() {
    return this.todoItems;
  }

  addTodoItem(todo, complete) {
    this.todoItems.push({
      id: this.todoItems.length,
      todo,
      complete
    });
  }

  getLocalTodoItems() {
    // console.log(this.configUrl);
    return this.http.get(this.configUrl);
  }

  findIndexOfTodoItem(todo) {
    const { id } = todo;
    const index = this.todoItems.findIndex(element => element.id === id);
    return index;
  }

  getCompletedTodoItems() {
    return this.todoItems.filter(todo => todo.complete === true);
  }

  getActiveTodos() {
    return this.todoItems.filter(todo => todo.complete === false);
  }

  completeTodoItem(todo) {
    const index = this.findIndexOfTodoItem(todo);
    this.todoItems[index].complete = todo.complete;
  }

  deleteTodo(todo) {
    const index = this.findIndexOfTodoItem(todo);
    this.todoItems.splice(index, 1);
    return this.todoItems;

  }
}
