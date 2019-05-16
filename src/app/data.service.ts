import { Injectable } from '@angular/core';
import { getLocaleNumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loansData : any

  getLoans(){

    this.loansData = [
      {
        "name" : "Loan 1",
        "repayment": "£324,000"
      },
      {
        "name" : "Loan 2",
        "repayment": "£330,440"
      },
      {
        "name" : "Loan 3",
        "repayment": "£4566"
      }
    ]
    return this.loansData
  }
  
}
