import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  addToDo(text): void {
    const newToDo: ToDo = {id: 0, name: ''};
    const idList = [];
    for (const toDo of this.appService.listToDo) {
      idList.push(toDo.id);
    }
    newToDo.id = Math.max(...idList) + 1;
    newToDo.name = text;
    this.appService.listToDo.push(newToDo);
  }

}
