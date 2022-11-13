import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loan } from 'src/loan';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  id?:number;
  loan1:loan;

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,public service:ProjserviceService) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=idparam?+idparam:0;
    this.service.getLoanDetails(this.id).subscribe(
      data=>{
        this.loan1=data;
      });
  }

}
