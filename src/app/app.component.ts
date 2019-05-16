import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private dataService : DataService) {
    this.dataService = dataService
  }

  data = this.dataService.getLoans()

}
