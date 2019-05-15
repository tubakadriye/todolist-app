import {Injectable} from '@angular/core';
import {Todolist} from './todolist';

@Injectable()
export class TodolistDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todolists: Todolist[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addTodolist(todolist: Todolist): TodolistDataService {
    if (!todolist.id) {
      todolist.id = ++this.lastId;
    }
    this.todolists.push(todolist);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodolistById(id: number): TodolistDataService {
    this.todolists = this.todolists
      .filter(todolist => todolist.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodolistById(id: number, values: Object = {}): Todolist {
    let todolist = this.getTodolistById(id);
    if (!todolist) {
      return null;
    }
    Object.assign(todolist, values);
    return todolist;
  }

  // Simulate GET /todos
  getAllTodolists(): Todolist[] {
    return this.todolists;
  }

  // Simulate GET /todos/:id
  getTodolistById(id: number): Todolist {
    return this.todolists
      .filter(todolist => todolist.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodolistComplete(todolist: Todolist){
    let updatedTodolist = this.updateTodolistById(todolist.id, {
      complete: !todolist.complete
    });
    return updatedTodolist;
  }

}
