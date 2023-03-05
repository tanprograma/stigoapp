import { Component, OnInit } from '@angular/core';
import { Transaction, Inventory } from 'src/app/types';
import { Input } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-masterdashboard',
  templateUrl: './masterdashboard.component.html',
  styleUrls: ['./masterdashboard.component.css'],
})
export class MasterdashboardComponent implements OnInit {
  constructor(public statisticsService: StatisticsService) {}
  inventories: any;

  ngOnInit(): void {}
  getInventories() {}
  reduceSum(coll: Transaction[]): number {
    console.log(coll);
    let sum: number = 0;
    coll.forEach((item: Transaction) => {
      sum += item.quantity;
    });
    return sum;
  }
}
