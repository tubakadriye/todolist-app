import {Todolist} from './todolist';

describe('Todolist', () => {
  it('should create an instance', () => {
    expect(new Todolist()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todolist = new Todolist({
      title: 'hello',
      complete: true
    });
    expect(todolist.title).toEqual('hello');
    expect(todolist.complete).toEqual(true);
  });
});