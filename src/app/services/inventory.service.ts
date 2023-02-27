import { Injectable } from '@angular/core';
import { InventoryItem } from '../types';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  url: string = 'http://localhost:8000/inventory';
  inventory!: InventoryItem[];
  constructor(private http: HttpService) {}
  getInventory() {
    this.http.get(this.url).subscribe((res: InventoryItem[]) => {
      this.inventory = this.sortInventory(res);
      console.log('getting the response....');
      console.log(this.inventory);
    });
  }
  sortInventory(res: InventoryItem[]): InventoryItem[] {
    return res.sort((item1: InventoryItem, item2: InventoryItem) => {
      if (item1.commodity > item2.commodity) {
        return 1;
      }
      if (item1.commodity < item2.commodity) {
        return -1;
      }
      return 0;
    });
  }
}
