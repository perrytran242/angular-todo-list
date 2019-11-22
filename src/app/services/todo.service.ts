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
}
