import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { HttpService } from './http.service';
import { CommodityService } from './commodity.service';
import { Commodity, Transaction, Inventory } from '../types';
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  url: string = 'http://localhost:5000/inventories';
  inventories!: Inventory[];
  constructor(
    private http: HttpService,
    private commodityService: CommodityService,
    private storeService: StoreService
  ) {}
  getInventory() {
    this.http.get(this.url).subscribe((res: Inventory[]) => {
      this.inventories = res;
      console.log('getting the response....');
      console.log(this.inventories);
    });
  }
  // getCommodityName(){}
  getInventoryByStore(store: string) {
    return this.inventories.filter((inventory: Inventory) => {
      return inventory.store == this.storeService.getStoreID(store);
    });
  }
  filterInventoryByCommodity(commodity: string) {
    return this.inventories.filter((inventory: Inventory) => {
      return (
        inventory.commodity == this.commodityService.getCommodityID(commodity)
      );
    });
  }

  getInventoryByCommodity(commodity: string) {
    const filtered: Inventory[] = this.filterInventoryByCommodity(commodity);
    return filtered.map((item: Inventory) => {
      const { store, commodity, dispensed, received, beggining, issued } = item;
      return {
        store,
        commodity,
        dispensed,
        received,
        beggining,
        issued,
        inspect: false,
      };
    });
  }

  // getStoreDashboard(store: string) {
  //   return this.filterInventoryByStore(store);
  // }
  getSummary() {
    const reduced: any = [];
    // key doesnt need to be string
    const keys: Commodity[] = this.commodityService.commodities;
    keys.forEach((key: Commodity) => {
      let beggining: number = 0;
      let dispensed: Transaction[] = [];
      let received: Transaction[] = [];

      this.inventories.forEach((inventory: Inventory) => {
        const condition = key._id == inventory.commodity;

        if (!condition) return;
        beggining += inventory.beggining;
        if (inventory.store.isWarehouse) {
          received.push(...inventory.received);
        }
        if (!inventory.store.isWarehouse) {
          dispensed.push(...inventory.dispensed);
        }
      });
      reduced.push({
        commodity: key._id,
        dispensed,
        beggining,
        received,
      });
    });
    return this.sortInventory(reduced);
  }

  sortInventoryForStore(data: Inventory[]) {
    return data.map((item: Inventory, index: number) => {
      return {
        sn: index + 1,
        beggining: item.beggining,
        received: item.received,
        issued: item.issued,
        dispensed: item.dispensed,
        commodity: item.commodity,
      };
    });
  }
  sortInventory(data: Inventory[]) {
    return data
      .sort((item1: Inventory, item2: Inventory) => {
        if (item1.commodity > item2.commodity) {
          return 1;
        }
        if (item1.commodity < item2.commodity) {
          return -1;
        }
        return 0;
      })
      .map((item: Inventory, index: number) => {
        return {
          sn: index + 1,
          beggining: item.beggining,
          received: item.received,
          dispensed: item.dispensed,
          commodity: item.commodity,
        };
      });
  }
}
