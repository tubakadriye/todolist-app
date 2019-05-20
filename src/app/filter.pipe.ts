import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodolists'
})
export class FilterTodolistsPipe implements PipeTransform {

  transform(todolists: any[], query: string): any {
    console.log('filter for', query);
    return todolists.filter(todolist => todolist.title.indexOf(query) !== -1);
  }
}
