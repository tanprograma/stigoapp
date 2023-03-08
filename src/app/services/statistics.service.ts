import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';
import { StoreService } from './store.service';
import { CommodityService } from './commodity.service';
import { ClientService } from './client.service';
import { RequestService } from './request.service';
import { PrescriptionService } from './prescription.service';
import { Transaction, Inventory, Commodity, Store } from '../types';
@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(
    private inventoryService: InventoryService,
    private storeservice: StoreService,
    private clientService: ClientService,
    private commodityService: CommodityService
  ) {}
  // dispensing statistics
  getCommodityName(id: any) {
    return this.commodityService.getCommodityName(id);
  }
  getStoreName(id: any) {
    return this.storeservice.getStoreName(id);
  }
  getClientName(id: any) {
    return this.clientService.getClientName(id);
  }
  changeDateToDay(date: any): number {
    return new Date(new Date(date).toLocaleDateString()).valueOf();
  }
  // given a summary of dispensed item datalist, it outputs all dates
  getDispensedDates(
    list: {
      store: string;
      dispensed: { date: any; id?: any; quantity: number }[];
    }[]
  ) {
    const rawData: any = [];
    const dates: any = [];
    list.forEach(
      (item: {
        store: string;
        dispensed: { date: any; id?: any; quantity: number }[];
      }) => {
        rawData.push(...item.dispensed);
      }
    );
    rawData.forEach((item: { date: any; id?: any; quantity: number }) => {
      if (dates.includes(this.changeDateToDay(item.date))) return;
      dates.push(this.changeDateToDay(item.date));
    });
    return dates.sort((item1: any, item2: any) => {
      if (item1 > item2) {
        return 1;
      }
      if (item1 < item2) {
        return -1;
      }
      return 0;
    });
  }
  getDispensedOnDate(
    date: number,
    data: {
      store: string;
      dispensed: { date: any; id?: any; quantity: number }[];
    }[]
  ) {
    const newData: any = [];
    data.forEach(
      (dataItem: {
        store: string;
        dispensed: { date: any; id?: any; quantity: number }[];
      }) => {
        dataItem.dispensed = dataItem.dispensed.filter(
          (item: { date: any; id?: any; quantity: number }) => {
            return this.changeDateToDay(item.date) == date;
          }
        );
        newData.push(dataItem);
      }
    );
    return newData;
  }
  getStoreByID(store: any) {
    return this.storeservice.stores.find((item: Store) => {
      return item._id == store;
    });
  }
  getDispensed() {
    const dispensed: any = [];

    this.commodityService.commodities.forEach((commodity: Commodity) => {
      const data = this.inventoryService
        .filterInventoryByCommodity(commodity._name)
        .filter((item: Inventory) => {
          return this.getStoreByID(item.store)?.isOutlet;
        })
        .map((inventory: Inventory) => {
          return {
            store: this.getStoreName(inventory.store),
            dispensed: inventory.dispensed,
            inspect: false,
          };
        })
        .sort((item1: any, item2: any) => {
          if (item1.store > item2.store) {
            return 1;
          }
          if (item1.store < item2.store) {
            return -1;
          }
          return 0;
        });
      dispensed.push({ commodity: commodity._name, data: data });
    });
    // testing the date....
    // dispensed.forEach((item: any) => {
    //   console.log('dates.....');
    //   console.log(this.getDispensedDates(item.data));
    // });
    // end of testing the date
    return dispensed.sort((item1: any, item2: any) => {
      if (item1.commodity > item2.commodity) {
        return 1;
      }
      if (item1.commodity < item2.commodity) {
        return -1;
      }
      return 0;
    });
  }
  getStoreInventorySummary(store: string) {
    const inventory = this.inventoryService.getInventoryByStore(store);
    if (inventory.length == 0) {
      return [];
    }
    return inventory
      .map((item: Inventory, index: number) => {
        return {
          sn: index + 1,
          beggining: item.beggining,
          received: item.received,
          issued: item.issued,
          dispensed: item.dispensed,
          commodity: this.getCommodityName(item.commodity),
        };
      })
      .sort((item1: any, item2: any) => {
        if (item1.commodity > item2.commodity) {
          return 1;
        }
        if (item1.commodity < item2.commodity) {
          return -1;
        }
        return 0;
      });
  }
  getInventorySummary(): InventorySummary[] {
    const inventories = this.inventoryService.getSummary();
    return inventories
      .map((item: any) => {
        const { commodity, dispensed, received, beggining } = item;
        return {
          commodity: this.getCommodityName(commodity),
          dispensed,

          received,
          beggining,

          inspect: false,
        };
      })
      .sort((item1: any, item2: any) => {
        if (item1.commodity > item2.commodity) {
          return 1;
        }
        if (item1.commodity < item2.commodity) {
          return -1;
        }
        return 0;
      });
  }
  getInventoryByCommodity(commodity: string) {
    return this.inventoryService
      .filterInventoryByCommodity(commodity)
      .map((item: Inventory) => {
        item.store = this.getStoreName(item.store);
        console.log(item);
        return item;
      });
  }
  reduceSum(coll: Transaction[]): number {
    // console.log(coll);
    let sum: number = 0;
    coll.forEach((item: Transaction) => {
      sum += item.quantity;
    });
    return sum;
  }
}
export interface InventorySummary {
  commodity: any;
  dispensed: any;

  received: any;
  beggining: number;

  inspect: boolean;
}
