import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  inputValue = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        title: 'Java',
        isCompleted: false,
      },
      {
        title: 'Python',
        isCompleted: false,
      },
      {
        title: 'Javascript',
        isCompleted: false,
      },
      {
        title: 'Nodejs',
        isCompleted: true,
      },
      {
        title: 'Typescript',
        isCompleted: true,
      },
    ];
  }

  toggleCompleted(id: number): boolean {
    return (this.todos[id].isCompleted = !this.todos[id].isCompleted);
  }
  delteTodo(id: number): Todo[] {
    return this.todos.splice(id, 1);
  }
  addTodo(): void {
    this.todos.push({
      title: this.inputValue,
      isCompleted: false,
    });
    this.inputValue = '';
  }
  getCompleted(): Todo[] {
    return this.todos.filter((todo) => todo.isCompleted);
  }
}
