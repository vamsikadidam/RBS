import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { customer } from 'src/customer';
import { loan } from 'src/loan';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

lo:loan[]=[];
cust:customer;

  constructor(public service:ProjserviceService) { }

  ngOnInit(): void {

  this.cust=new customer();
  }


  getCustomers():void{
    this.service.getCustomers().subscribe(
      data=>{
        this.lo=data;
      }
    )
  }
  

}
