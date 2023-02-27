import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { InventoryItem, TranItem } from 'src/app/types';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() inventory!: InventoryItem[];
  constructor() {}

  ngOnInit(): void {}
  reduceSum(coll: TranItem[]): number {
    console.log(coll);
    let sum: number = 0;
    coll.forEach((item: TranItem) => {
      sum += item.quantity;
    });
    return sum;
  }
}
