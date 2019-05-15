
export class Todolist {
    id: number;
    title: string = '';
    complete: boolean = false;
    duedate: Date ;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }

  let todolist = new Todolist({
    title: 'Build a todo app.',
    complete: false,
    duedate: "2019-05-31"
  });
