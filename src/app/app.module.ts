import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { GetLoanComponent } from './get-loan/get-loan.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatDividerModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetIdLoanComponent } from './get-id-loan/get-id-loan.component';




@NgModule({
  declarations: [
    AppComponent,
    GetLoanComponent,
    AddLoanComponent,
    EditLoanComponent,
    GetIdLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule
    ],
  providers: [
   DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
