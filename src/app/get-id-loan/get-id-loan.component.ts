import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-id-loan',
  templateUrl: './get-id-loan.component.html',
  styleUrls: ['./get-id-loan.component.css']
})
export class GetIdLoanComponent implements OnInit {
  loan: any= {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    
    ) { }


  ngOnInit(){
    this.route.params.subscribe(params => {
      this.dataService.getLoan(params['id']).subscribe(res =>{
        this.loan = res;
      });
    });
  }

  deleteLoan(id) {
    this.dataService.deleteLoan(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
