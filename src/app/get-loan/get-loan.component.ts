import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan.model';
import { DataService } from '../data.service';



@Component({
  selector: 'app-get-loan',
  templateUrl: './get-loan.component.html',
  styleUrls: ['./get-loan.component.css']
})
export class GetLoanComponent implements OnInit {

  loans: Loan[]

  constructor( private dataService: DataService) {}

  ngOnInit(){
    this.dataService
      .getLoan()
      .subscribe((data: Loan[]) => {
        this.loans = data;
    });
  }


}
