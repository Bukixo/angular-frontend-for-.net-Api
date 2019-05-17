import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { GetLoanComponent } from './get-loan/get-loan.component';
import { GetIdLoanComponent } from './get-id-loan/get-id-loan.component';

const routes: Routes = [
  {
    path: 'loans/add',
    component: AddLoanComponent
  },
  // {
  //   path: 'loans/edit/:id',
  //   component: EditLoanComponent
  // },
  {
    path: 'loans/:id',
    component: GetIdLoanComponent
  },
  {
    path: '',
    component: GetLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
