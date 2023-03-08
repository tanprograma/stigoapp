import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ShopComponent } from './components/shop/shop.component';

import { PrescriptionComponent } from './components/prescription/prescription.component';

import { RequestComponent } from './components/request/request.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IssuedstatsComponent } from './components/issuedstats/issuedstats.component';
import { DispensedstatsComponent } from './components/dispensedstats/dispensedstats.component';

import { TransactionstatsComponent } from './components/transactionstats/transactionstats.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { MasterdashboardComponent } from './components/masterdashboard/masterdashboard.component';

import { ManagestoreComponent } from './components/managestore/managestore.component';
import { ManagecommodityComponent } from './components/managecommodity/managecommodity.component';
import { ManageclientComponent } from './components/manageclient/manageclient.component';
import { CreatestoreComponent } from './components/storeforms/createstore/createstore.component';
import { CreatecommodityComponent } from './components/commodity/createcommodity/createcommodity.component';
import { UpdatecommodityComponent } from './components/commodity/updatecommodity/updatecommodity.component';

import { DeletecommodityComponent } from './components/commodity/deletecommodity/deletecommodity.component';
import { UpdatestoreComponent } from './components/storeforms/updatestore/updatestore.component';
import { DeletestoreComponent } from './components/storeforms/deletestore/deletestore.component';
import { CreateclientComponent } from './components/clientforms/createclient/createclient.component';
import { UpdateclientComponent } from './components/clientforms/updateclient/updateclient.component';
import { DeleteclientComponent } from './components/clientforms/deleteclient/deleteclient.component';

import { MasterstatisticsComponent } from './components/masterstatistics/masterstatistics.component';
import { MasterstatisticshomeComponent } from './components/masterstatisticshome/masterstatisticshome.component';
import { DashboardchartComponent } from './components/charts/dashboardchart/dashboardchart.component';
import { MasterdashboarddetailedComponent } from './components/masterdashboarddetailed/masterdashboarddetailed.component';

import { DispensedchartComponent } from './components/charts/dispensedchart/dispensedchart.component';
import { ReceivedchartComponent } from './components/charts/receivedchart/receivedchart.component';

import { MasterdispenseddashboardComponent } from './components/masterdispenseddashboard/masterdispenseddashboard.component';
import { MasterreceiveddashboardComponent } from './components/masterreceiveddashboard/masterreceiveddashboard.component';
import { MasterdispenseddetailedComponent } from './components/masterdispenseddetailed/masterdispenseddetailed.component';
import { MasterreceiveddetailedComponent } from './components/masterreceiveddetailed/masterreceiveddetailed.component';
import { ManageinventoryComponent } from './components/manageinventory/manageinventory.component';
import { AddstocktakingComponent } from './components/inventoryforms/addstocktaking/addstocktaking.component';

@NgModule({
  declarations: [
    AppComponent,

    ShopComponent,

    PrescriptionComponent,

    RequestComponent,
    StatisticsComponent,
    DashboardComponent,
    IssuedstatsComponent,
    DispensedstatsComponent,

    TransactionstatsComponent,
    TableDataComponent,
    MasterdashboardComponent,

    ManagestoreComponent,
    ManagecommodityComponent,
    ManageclientComponent,
    CreatestoreComponent,
    CreatecommodityComponent,
    UpdatecommodityComponent,

    DeletecommodityComponent,
    UpdatestoreComponent,
    DeletestoreComponent,
    CreateclientComponent,
    UpdateclientComponent,
    DeleteclientComponent,

    MasterstatisticsComponent,
    MasterstatisticshomeComponent,
    DashboardchartComponent,
    MasterdashboarddetailedComponent,

    DispensedchartComponent,
    ReceivedchartComponent,

    MasterdispenseddashboardComponent,
    MasterreceiveddashboardComponent,
    MasterdispenseddetailedComponent,
    MasterreceiveddetailedComponent,
    ManageinventoryComponent,
    AddstocktakingComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
