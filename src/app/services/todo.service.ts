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
    console.log('completed todo items:', this.todoItems);
    return this.todoItems.filter(todo => todo.complete === true);
  }

  completeTodoItem(todo) {
    const { id, complete } = todo;
    const index = this.todoItems.findIndex(item => item.id === id);
    console.log(index);
    this.todoItems[index].complete = complete;
    console.log(this.todoItems);
  }
}
