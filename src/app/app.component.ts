import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { NavigationCancel, Event, NavigationEnd, NavigationError, 
        NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private dataService : DataService) {
    this.dataService = dataService
  }

  //data = this.dataService.getLoans()

}
