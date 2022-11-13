import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import { LoanComponent } from './customer/loan.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
