import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { MainappComponent } from '../mainapp/mainapp.component';
import { TranItem, InventoryItem } from 'src/app/types';
import { IssueService } from 'src/app/services/issue.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  dashboardView: string = 'dashboard';
  dispensedView: string = 'dispensed';
  issuedView: string = 'issued';
  receivedView: string = 'received';
  view: string = this.dashboardView;
  sidemenu: string[] = [
    this.dashboardView,
    this.issuedView,
    this.dispensedView,
    this.receivedView,
  ];
  constructor(
    public data: InventoryService,
    public appData: MainappserviceService,
    public issueService: IssueService
  ) {}

  ngOnInit(): void {
    this.issueService.getIssued();
  }
  setView(view: string) {
    this.view = view;
  }
  sortTransaction(transaction: TranItem[]) {
    const dates: number[] = [];
    const quantities: number[] = [];
    transaction
      .sort((item1: TranItem, item2: TranItem) => {
        if (item1.date > item2.date) {
          return 1;
        }
        if (item1.date < item2.date) {
          return -1;
        }
        return 0;
      })
      .forEach((item: TranItem) => {
        dates.push(item.date);
        quantities.push(item.quantity);
      });

    return {
      dates,
      quantities,
    };
  }

  getReceived(inventory: InventoryItem[]): TransactionStat[] {
    return inventory.map((item: InventoryItem) => {
      let { commodity, received } = item;
      const transaction = this.sortTransaction(received);
      return {
        commodity,
        transaction,
      };
    });
  }
  getIssued(inventory: InventoryItem[]): TransactionStat[] {
    return inventory.map((item: InventoryItem) => {
      let { commodity, issued } = item;
      const transaction = this.sortTransaction(issued);
      return {
        commodity,
        transaction,
      };
    });
  }
  getDispensed(inventory: InventoryItem[]): TransactionStat[] {
    return inventory.map((item: InventoryItem) => {
      let { commodity, dispensed } = item;
      const transaction = this.sortTransaction(dispensed);
      return {
        commodity,
        transaction,
      };
    });
  }
}
export interface TransactionStat {
  commodity: string;
  transaction: { dates: number[]; quantities: number[] };
}
