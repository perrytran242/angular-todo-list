import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems = [
    {id: 1, todo: 'walk the dog', complete: false},
    {id: 2, todo: 'go to gym', complete: false},
    {id: 3, todo: 'go to doctor', complete: false},
  ];

  constructor() { }

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

  getCompletedTodoItems() {
    return this.todoItems.filter(todo => todo.complete === true);
  }

  getActiveTodos() {
    return this.todoItems.filter(todo => todo.complete === false);
  }

  completeTodoItem(todo) {
    const { id, complete } = todo;
    const index = this.todoItems.findIndex(element => element.id === id);
    this.todoItems[index].complete = complete;
  }

  deleteTodo(todo) {
    const { id } = todo;
    const index = this.todoItems.findIndex(element => element.id === id);
    this.todoItems.splice(index, 1);
    return this.todoItems;

  }
}
