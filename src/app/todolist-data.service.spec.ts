import {TestBed, async, inject} from '@angular/core/testing';
import {Todolist} from './todolist';
import {TodolistDataService} from './todolist-data.service';

describe('TodolistDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodolistDataService]
    });
  });

  it('should ...', inject([TodolistDataService], (service: TodolistDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodolists()', () => {

    it('should return an empty array by default', inject([TodolistDataService], (service: TodolistDataService) => {
      expect(service.getAllTodolists()).toEqual([]);
    }));

    it('should return all todos', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist1 = new Todolist({title: 'Hello 1', complete: false});
      let todolist2 = new Todolist({title: 'Hello 2', complete: true});
      service.addTodolist(todolist1);
      service.addTodolist(todolist2);
      expect(service.getAllTodolists()).toEqual([todolist1, todolist2]);
    }));

  });

  describe('#save(todolist)', () => {

    it('should automatically assign an incrementing id', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist1 = new Todolist({title: 'Hello 1', complete: false});
      let todolist2 = new Todolist({title: 'Hello 2', complete: true});
      service.addTodolist(todolist1);
      service.addTodolist(todolist2);
      expect(service.getTodolistById(1)).toEqual(todolist1);
      expect(service.getTodolistById(2)).toEqual(todolist2);
    }));

  });

  describe('#deleteTodolistById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist1 = new Todolist({title: 'Hello 1', complete: false});
      let todolist2 = new Todolist({title: 'Hello 2', complete: true});
      service.addTodolist(todolist1);
      service.addTodolist(todolist2);
      expect(service.getAllTodolists()).toEqual([todolist1, todolist2]);
      service.deleteTodolistById(1);
      expect(service.getAllTodolists()).toEqual([todolist2]);
      service.deleteTodolistById(2);
      expect(service.getAllTodolists()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist1 = new Todolist({title: 'Hello 1', complete: false});
      let todolist2 = new Todolist({title: 'Hello 2', complete: true});
      service.addTodolist(todolist1);
      service.addTodolist(todolist2);
      expect(service.getAllTodolists()).toEqual([todolist1, todolist2]);
      service.deleteTodolistById(3);
      expect(service.getAllTodolists()).toEqual([todolist1, todolist2]);
    }));

  });

  describe('#updateTodolistById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist = new Todolist({title: 'Hello 1', complete: false});
      service.addTodolist(todolist);
      let updatedTodolist = service.updateTodolistById(1, {
        title: 'new title'
      });
      expect(updatedTodolist.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist = new Todolist({title: 'Hello 1', complete: false});
      service.addTodolist(todolist);
      let updatedTodolist = service.updateTodolistById(2, {
        title: 'new title'
      });
      expect(updatedTodolist).toEqual(null);
    }));

  });

  describe('#toggleTodolistComplete(todolist)', () => {

    it('should return the updated todo with inverse complete status', inject([TodolistDataService], (service: TodolistDataService) => {
      let todolist = new Todolist({title: 'Hello 1', complete: false});
      service.addTodolist(todolist);
      let updatedTodolist = service.toggleTodolistComplete(todolist);
      expect(updatedTodolist.complete).toEqual(true);
      service.toggleTodolistComplete(todolist);
      expect(updatedTodolist.complete).toEqual(false);
    }));

  });

});