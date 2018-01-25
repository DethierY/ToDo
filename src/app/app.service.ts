import { Injectable } from '@angular/core';
import { ToDo } from './ToDo';

@Injectable()
export class AppService {

  listToDo: ToDo[] = [
    {id: 1,
    name: 'todo1'},
    {id: 2,
    name: 'todo2'},
    {id: 3,
    name: 'todo3'},
    {id: 4,
    name: 'todo4'},
    {id: 5,
    name: 'todo5'}
  ];

  editableToDo: ToDo;

  editable = false;

  constructor() { }


}
