import { Component, OnInit } from '@angular/core';
import { Transaction, Inventory } from 'src/app/types';

import { Input } from '@angular/core';

import { StatisticsService } from 'src/app/services/statistics.service';
@Component({
  selector: 'app-masterdispenseddashboard',
  templateUrl: './masterdispenseddashboard.component.html',
  styleUrls: ['./masterdispenseddashboard.component.css'],
})
export class MasterdispenseddashboardComponent implements OnInit {
  @Input() inventories!: any[];
  constructor(public statisticsService: StatisticsService) {}
  clinics!: string[];

  data: any;
  dispensed = [{ date: 8453950, quantity: 200, prescriptionId: 8583904 }];
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
    // this.data = [
    //   {
    //     commodity: 'paracetamol',
    //     data: [
    //       {
    //         store: 'mainclinic',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 300 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //       {
    //         store: 'powerhouse',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 400 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //       {
    //         store: 'rightbank',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 500 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //     ].sort((a: any, b: any) => {
    //       if (a.store > b.store) {
    //         return 1;
    //       }
    //       if (a.store < b.store) {
    //         return -1;
    //       }
    //       return 0;
    //     }),
    //   },
    //   {
    //     commodity: 'azithromycin',
    //     data: [
    //       {
    //         store: 'mainclinic',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 300 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //       {
    //         store: 'powerhouse',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 400 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //       {
    //         store: 'rightbank',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 500 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //     ].sort((a: any, b: any) => {
    //       if (a.store > b.store) {
    //         return 1;
    //       }
    //       if (a.store < b.store) {
    //         return -1;
    //       }
    //       return 0;
    //     }),
    //   },
    //   {
    //     commodity: 'diclofenac',
    //     data: [
    //       {
    //         store: 'mainclinic',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 300 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //       {
    //         store: 'powerhouse',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 400 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //       {
    //         store: 'rightbank',
    //         dispensed: [
    //           { date: 1672606800000, quantity: 500 },
    //           { date: 1675285200000, quantity: 30 },
    //           { date: 1677704400000, quantity: 30 },
    //           { date: 1680382800000, quantity: 30 },
    //           { date: 1682974800000, quantity: 30 },
    //         ],
    //       },
    //     ].sort((a: any, b: any) => {
    //       if (a.store > b.store) {
    //         return 1;
    //       }
    //       if (a.store < b.store) {
    //         return -1;
    //       }
    //       return 0;
    //     }),
    //   },
    // ];
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
}
