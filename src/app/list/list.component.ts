import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import { ToDo } from '../ToDo';
import { element } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  deleteToDo(todo: ToDo): void {
    const index = this.appService.listToDo.indexOf(todo);
    this.appService.listToDo.splice(index, 1);
    console.log (this.appService.listToDo);
  }

  editTrue(todo: ToDo): void {
    this.appService.editable = true;
    this.appService.editableToDo = todo;
  }

}
