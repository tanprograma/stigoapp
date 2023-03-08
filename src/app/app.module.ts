import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
// from redesigned

import { BillboardComponent } from './components/shared/billboard/billboard.component';
import { SelectwizardComponent } from './components/shared/selectwizard/selectwizard.component';

import { FooterComponent } from './components/shared/footer/footer.component';
import { AppheaderComponent } from './components/shared/appheader/appheader.component';
import { HomeComponent } from './components/shared/home/home.component';

import { MainapplicationComponent } from './components/mainapplication/mainapplication.component';
import { ManageapplicationComponent } from './components/manageapplication/manageapplication.component';
import { StoreapplicationComponent } from './components/storeapplication/storeapplication.component';
import { StatisticsapplicationComponent } from './components/statisticsapplication/statisticsapplication.component';
import { SelectbuttonComponent } from './components/shared/selectbutton/selectbutton.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ShopComponent } from './components/shop/shop.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { RequestComponent } from './components/request/request.component';
import { IssueComponent } from './components/issue/issue.component';

@NgModule({
  declarations: [
    AppComponent,

    ShopComponent,

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
    BillboardComponent,
    SelectwizardComponent,

    FooterComponent,
    AppheaderComponent,
    HomeComponent,

    MainapplicationComponent,
    ManageapplicationComponent,
    StoreapplicationComponent,
    StatisticsapplicationComponent,
    SelectbuttonComponent,
    HeaderComponent,
    NavigationComponent,
    ShopComponent,
    PrescriptionComponent,
    RequestComponent,
    IssueComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
