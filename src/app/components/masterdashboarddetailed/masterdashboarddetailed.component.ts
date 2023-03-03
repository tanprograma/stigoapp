import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Transaction } from 'src/app/types';
import { StatisticsService } from 'src/app/services/statistics.service';
@Component({
  selector: 'app-masterdashboarddetailed',
  templateUrl: './masterdashboarddetailed.component.html',
  styleUrls: ['./masterdashboarddetailed.component.css'],
})
export class MasterdashboarddetailedComponent implements OnInit {
  constructor(public statisticsService: StatisticsService) {}
  inventories: any;
  ngOnInit(): void {
    this.inventories = this.statisticsService.getInventorySummary();
  }
  reduceSum(coll: Transaction[]): number {
    // console.log(coll);
    let sum: number = 0;
    coll.forEach((item: Transaction) => {
      sum += item.quantity;
    });
    return sum;
  }
  inspect(item: any) {
    console.log(item.inspect);
    item.inspect = !item.inspect;
    console.log(item);
  }
}
