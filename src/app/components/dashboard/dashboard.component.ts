import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Inventory, Transaction } from 'src/app/types';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() inventory!: any;
  constructor() {}

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
