import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
       loan_name: ['', Validators.required ],
       repayment: ['', Validators.required ]
     });
   }

   ngOnInit(){}

}
