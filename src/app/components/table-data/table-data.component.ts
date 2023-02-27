import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  @Input() tableData?: TableDataItem[];
  constructor() {}

  ngOnInit(): void {}
}
interface TableDataItem {
  sn: number;
  commodity: string;
  quantity: number;
}
