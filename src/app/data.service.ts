import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  uri = 'http://localhost:5000/api/loans'

  constructor(private http: HttpClient) { }

  addLoan(name, repayment) {
    const obj = {
      name: name,
      repayment: repayment
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }

  getAllLoans() {
    return this
      .http
      .get(`${this.uri}`);
  }

  getLoan(id) {
    return this
      .http
      .get(`${this.uri}/${id}`);
  }

  editLoan(id){
    return this
    .http
    .get(`${this.uri}/${id}`);
  }

  updateLoan(name, repayment, id){
    const obj = {
      name: name,
      repayment: repayment
    };
    this
    .http
    .put(`${this.uri}/${id}`, obj)
    .subscribe(res => console.log('Update Done'));
  }

  deleteLoan(id) {
    return this
    .http
    .delete(`${this.uri}/${id}`);
  }
}


