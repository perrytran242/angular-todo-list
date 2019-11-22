import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoItem: any;
  constructor() { }

  ngOnInit() {
    console.log(this.todoItem.todo);
  }

}
