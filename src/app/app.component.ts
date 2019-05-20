import { Component } from '@angular/core';
import {Todolist} from './todolist';
import { TodolistDataService } from './todolist-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodolistDataService]
})
export class AppComponent {
  public query = "";
  newTodolist: Todolist = new Todolist();
   // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodolistDataService`
  // and assign it to a property called `todolistDataService`
  constructor(private todolistDataService: TodolistDataService) {
  }

  addTodolist() {
    this.todolistDataService.addTodolist(this.newTodolist);
    this.newTodolist = new Todolist();
  }
  
  toggleTodolistComplete(todolist) {
    this.todolistDataService.toggleTodolistComplete(todolist);
  }

  removeTodolist(todolist) {
    this.todolistDataService.deleteTodolistById(todolist.id);
  }

  get todolists() {
    return this.todolistDataService.getAllTodolists();
  }

}
  
