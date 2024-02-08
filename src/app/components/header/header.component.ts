import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import {UiService} from "../../services/ui-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "task trucker";
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiService:UiService,private router:Router) {
    this.subscription = uiService.onToggle().subscribe((val)=>{

      this.showAddTask = val;
    })
   }

  ngOnInit() {
  }

  onToggle(){
    this.uiService.toggleTask();
  }
  
  hasRoute(url: string): boolean{
    return this.router.url === url;
  }



}
