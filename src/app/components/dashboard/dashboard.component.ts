import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Inventory, Transaction } from 'src/app/types';
import { StatisticsService } from 'src/app/services/statistics.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() inventories: any;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {}
  reduceSum(coll: Transaction[]): number {
    // console.log(coll);
    let sum: number = 0;
    coll.forEach((item: Transaction) => {
      sum += item.quantity;
    });
    return sum;
  }
}
