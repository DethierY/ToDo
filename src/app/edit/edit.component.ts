import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  editToDo(todo: ToDo, id: number, name: string): void {
    const idProv = this.appService.editableToDo.name;
    if (id) {
      this.appService.editableToDo.id = id;
    }
    if (name) {
      this.appService.editableToDo.name = name;
    }
  this.appService.editable = false;
  }
}
