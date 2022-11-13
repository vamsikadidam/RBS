import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './customer/loan.component';

const routes: Routes = [
  {
     path:'getcustomer',
     component: CustomerComponent

  },
  {
    path:'loan/:id',
    component:LoanComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
