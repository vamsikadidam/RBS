import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


customers:any;

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    // this.customers=this.service.getCustomer().subscribe(data=>this.customers=data);
  //  let response= this.http.get("http://localhost:8080/customer");
  //  response.subscribe((data)=>this.customers=data);
  }
  button(){
    this.customers=this.service.getCustomer().subscribe(data=>this.customers=data);
 
  }

}
