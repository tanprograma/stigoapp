import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Transaction } from 'src/app/types';
import { StatisticsService } from 'src/app/services/statistics.service';
@Component({
  selector: 'app-masterdispenseddetailed',
  templateUrl: './masterdispenseddetailed.component.html',
  styleUrls: ['./masterdispenseddetailed.component.css'],
})
export class MasterdispenseddetailedComponent implements OnInit {
  constructor(public statisticsService: StatisticsService) {}
  clinics!: string[];
  data: any;
  ngOnInit(): void {
    this.clinics = ['mainclinic', 'powerhouse', 'rightbank'].sort(
      (a: string, b: string) => {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      }
    );
    this.data = this.statisticsService.getDispensed();
  }
  reduceSum(coll: any): number {
    console.log(coll);
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
  getDateString(date: number) {
    return new Date(date).toLocaleDateString();
  }
  inspect(item: any) {
    console.log(item.inspect);
    item.inspect = !item.inspect;
    console.log(item);
  }
}
