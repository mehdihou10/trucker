import { Component, OnInit } from '@angular/core';
import {Tasks} from '../../tasks.schema';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasksData: Tasks[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {

    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasksData = tasks;
    })
  }

  deleteTask(task){
    this.taskService.deleteTask(task).subscribe(()=>{

      this.tasksData = this.tasksData.filter(tsk=> tsk.id !== task.id)
    })
  }

  toggleReminder(task){
    
    this.taskService.toggleReminder(task).subscribe(()=>{
      task.reminder = task.reminder ? false : true;
    })
  }

  addNewTask(task){
    this.taskService.addTask(task).subscribe((ts)=>{
      this.tasksData.push(ts)
    })
  }


}
