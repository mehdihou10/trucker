import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Tasks} from '../../tasks.schema';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Tasks;
  @Output() onDelete = new EventEmitter();
  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(){
  this.onDelete.emit();
  }

  toggle(task){
    this.onToggle.emit(task);
  }

}
