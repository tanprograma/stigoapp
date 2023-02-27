import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispensedstats',
  templateUrl: './dispensedstats.component.html',
  styleUrls: ['./dispensedstats.component.css'],
})
export class DispensedstatsComponent implements OnInit {
  date!: string;
  maxDate!: string;
  minDate!: string;
  data: TableItem[] = [
    { commodity: 'paracetamol', quantity: 20, date: 1640984400000 },
    { commodity: 'zinc', quantity: 20, date: 1643749200000 },
    { commodity: 'erythromycin', quantity: 20, date: 1646254800000 },
    { commodity: 'ceftriaxone', quantity: 20, date: 1649019600000 },
    { commodity: 'paracetamol', quantity: 20, date: 1672520400000 },
    { commodity: 'zinc', quantity: 20, date: 1675285200000 },
    { commodity: 'erythromycin', quantity: 20, date: 1677790800000 },
    { commodity: 'ceftriaxone', quantity: 20, date: 1680555600000 },
  ];
  tableData!: any;
  dataView!: string;
  allView: string = 'all';
  dateView: string = 'date';
  rangeView: string = 'range';
  constructor() {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.dataView = this.allView;
    const reduced: any = [];
    const medicineKeys: string[] = this.getMedicines();
    medicineKeys.forEach((key: string) => {
      let quantity = 0;
      this.data.forEach((item: TableItem) => {
        const condition = key == item.commodity;
        if (!condition) return;
        quantity += item.quantity;
      });
      reduced.push({
        commodity: key,
        quantity: quantity,
      });
    });

    this.tableData = this.sortData(reduced);
  }
  getDate() {
    this.dataView = this.dateView;
    const reduced: any = [];
    const medicineKeys: string[] = this.getMedicines();
    medicineKeys.forEach((key: string) => {
      let quantity = 0;
      this.data.forEach((item: TableItem) => {
        const condition =
          key == item.commodity &&
          this.changeStringDate(this.date) == this.changeNumberDate(item.date);
        if (!condition) return;
        quantity += item.quantity;
      });
      reduced.push({
        commodity: key,
        quantity: quantity,
      });
    });

    this.tableData = this.sortData(reduced);
  }
  getRange() {
    this.dataView = this.rangeView;
    const reduced: any = [];
    const medicineKeys: string[] = this.getMedicines();
    medicineKeys.forEach((key: string) => {
      let quantity = 0;
      this.data.forEach((item: TableItem) => {
        const dateCondition =
          item.date >= this.changeStringDate(this.minDate) &&
          item.date <= this.changeStringDate(this.maxDate);
        const condition = key == item.commodity && dateCondition;

        if (!condition) return;
        quantity += item.quantity;
      });
      reduced.push({
        commodity: key,
        quantity: quantity,
      });
    });

    this.tableData = this.sortData(reduced);
  }
  getMedicines() {
    const medicines: string[] = [];
    this.data.forEach((item: TableItem) => {
      if (medicines.includes(item.commodity)) return;
      medicines.push(item.commodity);
    });
    return medicines;
  }
  sortData(data: TableItem[]) {
    return data
      .sort((item1: TableItem, item2: TableItem) => {
        if (item1.commodity > item2.commodity) {
          return 1;
        }
        if (item1.commodity < item2.commodity) {
          return -1;
        }
        return 0;
      })
      .filter((item: TableItem) => {
        return item.quantity > 0;
      })
      .map((item: TableItem, index: number) => {
        return {
          sn: index + 1,
          commodity: item.commodity,
          quantity: item.quantity,
        };
      });
  }
  changeStringDate(date: string): number {
    const pre: any = new Date(date).toLocaleDateString();
    return new Date(pre).valueOf();
  }
  changeNumberDate(date: number): number {
    const pre: any = new Date(date).toLocaleDateString();
    return new Date(pre).valueOf();
  }
}
interface TableItem {
  date: number;
  commodity: string;
  quantity: number;
}
