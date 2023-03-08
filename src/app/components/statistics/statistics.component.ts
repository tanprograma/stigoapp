import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { Inventory, Transaction } from 'src/app/types';
import { IssueService } from 'src/app/services/issue.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  @Input() clinic!: string;
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
    public statisticsService: StatisticsService,
    public mainAppService: MainappserviceService,
    public issueService: IssueService
  ) {}

  ngOnInit(): void {
    this.issueService.getIssued(true, this.clinic);
  }
  setView(view: string) {
    this.view = view;
  }
  sortTransaction(transaction: Transaction[]) {
    const dates: number[] = [];
    const quantities: number[] = [];
    transaction
      .sort((item1: Transaction, item2: Transaction) => {
        if (item1.date > item2.date) {
          return 1;
        }
        if (item1.date < item2.date) {
          return -1;
        }
        return 0;
      })
      .forEach((item: Transaction) => {
        dates.push(item.date);
        quantities.push(item.quantity);
      });

    return {
      dates,
      quantities,
    };
  }

  getReceived(inventory: Inventory[]): TransactionStat[] {
    return inventory.map((item: Inventory) => {
      let { commodity, received } = item;
      const transaction = this.sortTransaction(received);
      return {
        commodity,
        transaction,
      };
    });
  }
  getIssued(inventory: Inventory[]): TransactionStat[] {
    return inventory.map((item: Inventory) => {
      let { commodity, issued } = item;
      const transaction = this.sortTransaction(issued);
      return {
        commodity,
        transaction,
      };
    });
  }
  getDispensed(inventory: Inventory[]): TransactionStat[] {
    return inventory.map((item: Inventory) => {
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
