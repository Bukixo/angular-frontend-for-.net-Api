import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../data.service'
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {

  loan: any= {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
    ) { 
      this.createForm();
    }

    createForm(){
      this.angForm = this.fb.group({
        name: ['', Validators.required],
        repayment: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.editLoan(params['id']).subscribe(res =>{
        this.loan = res;
      });
    });
  }

}
