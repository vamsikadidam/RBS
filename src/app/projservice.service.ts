import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(public http:HttpClient) { }

getCustomers(){
  return this.http.get<any>("http://localhost:8080/getCustomer");

  }

  getLoanDetails(loanId:number){
    return this.http.get<any>(`http://localhost:8080/loandetails/${loanId}`)
  }
}
