import { Component, OnInit } from '@angular/core';
import { Transaction, Inventory } from 'src/app/types';
import { StoreService } from 'src/app/services/store.service';
import { Input } from '@angular/core';
import { Store } from 'src/app/types';
import { StatisticsService } from 'src/app/services/statistics.service';
@Component({
  selector: 'app-masterdispenseddashboard',
  templateUrl: './masterdispenseddashboard.component.html',
  styleUrls: ['./masterdispenseddashboard.component.css'],
})
export class MasterdispenseddashboardComponent implements OnInit {
  @Input() inventories!: any[];
  constructor(
    public statisticsService: StatisticsService,
    public storeService: StoreService
  ) {}
  clinics!: Store[];

  data: any;
  dispensed = [{ date: 8453950, quantity: 200, prescriptionId: 8583904 }];
  ngOnInit(): void {
    this.clinics = this.storeService.stores
      .filter((item: Store) => {
        return item.isOutlet;
      })
      .sort((a: Store, b: Store) => {
        if (a._name > b._name) {
          return 1;
        }
        if (a._name < b._name) {
          return -1;
        }
        return 0;
      });
    console.log(this.clinics);
    this.data = this.statisticsService.getDispensed();
  }
  reduceSum(coll: any): number {
    let sum: number = 0;
    coll.forEach((item: Transaction) => {
      sum += item.quantity;
    });
    return sum;
  }
  getSum(item: any) {
    let sum: number = 0;
    item.forEach((component: any) => {
      sum += this.reduceSum(component.dispensed);
    });
    return sum;
  }
}
