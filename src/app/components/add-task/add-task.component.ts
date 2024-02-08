import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Subscription} from "rxjs"
import { UiService } from 'src/app/services/ui-service.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean;
  showAddTask: boolean;
  subscribtion: Subscription;

  @Output() submitTask = new EventEmitter()

  constructor(private uiService: UiService) {
    this.subscribtion = this.uiService.onToggle().subscribe((val)=>{

      this.showAddTask = val;
    })
   }

  ngOnInit() {
  }

  onSubmit(){

    if(this.text === ""){

      alert('please add a text!')
      return;

    }

    if(this.day === ''){

      alert('please add a date!')
      return;

    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder || false
    }

    this.submitTask.emit(newTask)

    this.text = "";
    this.day = "";
    this.reminder = false;


  }


}
