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

  getLoan() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editLoan(id){
    return this
    .http
    .get(`${this.uri}/${id}`);
  }

}


