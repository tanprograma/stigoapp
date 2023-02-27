import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TransactionStat } from '../statistics/statistics.component';
@Component({
  selector: 'app-transactionstats',
  templateUrl: './transactionstats.component.html',
  styleUrls: ['./transactionstats.component.css'],
})
export class TransactionstatsComponent implements OnInit {
  @Input() inventory!: TransactionStat[];
  constructor() {}

  ngOnInit(): void {}
  changeDate(date: number): string {
    return new Date(date).toLocaleDateString();
  }
}
