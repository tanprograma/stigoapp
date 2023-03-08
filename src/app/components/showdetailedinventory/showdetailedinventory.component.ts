import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Transaction } from 'src/app/types';
import { StatisticsService } from 'src/app/services/statistics.service';
@Component({
  selector: 'app-showdetailedinventory',
  templateUrl: './showdetailedinventory.component.html',
  styleUrls: ['./showdetailedinventory.component.css'],
})
export class ShowdetailedinventoryComponent implements OnInit {
  constructor(public statisticsService: StatisticsService) {}
  @Input() commodity: any;
  commodities!: any;
  inspected!: boolean;
  reduceSum(coll: Transaction[]): number {
    // console.log(coll);
    let sum: number = 0;
    coll.forEach((item: Transaction) => {
      sum += item.quantity;
    });
    return sum;
  }
  ngOnInit(): void {
    this.inspected = false;
    console.log(this.commodity);
    this.commodities = this.statisticsService.getInventoryByCommodity(
      this.commodity
    );
  }
  inspect() {
    this.inspected = !this.inspected;
  }
}
