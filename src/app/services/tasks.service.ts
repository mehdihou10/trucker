import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Tasks } from '../tasks.schema';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private api = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable <Tasks[]> {
   const tasks =  this.http.get<Tasks[]>(this.api)

   return tasks
  }

  deleteTask(task): Observable<Tasks>{
    const url = `${this.api}/${task.id}`;

    return this.http.delete<Tasks>(url);
  }

  toggleReminder(task): Observable<Tasks>{
    const url = `${this.api}/${task.id}`;
     return this.http.patch<Tasks>(url,{reminder: !task.reminder},httpOptions)
  }

  addTask(task): Observable<Tasks>{

    return this.http.post<Tasks>(this.api,task,httpOptions)
  }
}
