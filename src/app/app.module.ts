import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GetshopComponent } from './components/getshop/getshop.component';
import { MainappComponent } from './components/mainapp/mainapp.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { IssueComponent } from './components/issue/issue.component';
import { RequestComponent } from './components/request/request.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IssuedstatsComponent } from './components/issuedstats/issuedstats.component';
import { DispensedstatsComponent } from './components/dispensedstats/dispensedstats.component';

import { TransactionstatsComponent } from './components/transactionstats/transactionstats.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { MasterdashboardComponent } from './components/masterdashboard/masterdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    LogoComponent,
    NavigationComponent,
    GetshopComponent,
    MainappComponent,
    PrescriptionComponent,
    IssueComponent,
    RequestComponent,
    StatisticsComponent,
    DashboardComponent,
    IssuedstatsComponent,
    DispensedstatsComponent,

    TransactionstatsComponent,
     TableDataComponent,
     MasterdashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
