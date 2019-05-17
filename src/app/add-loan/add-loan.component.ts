import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DataService } from '../data.service'
@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private data: DataService) {
    this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
       name: ['', Validators.required ],
       repayment: ['', Validators.required ]
     });
   }

   addLoan(name, repayment) {
     this.data.addLoan(name, repayment);
   }

   ngOnInit(){}

}
