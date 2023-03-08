import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { HttpService } from './http.service';
import { CommodityService } from './commodity.service';
import {
  Commodity,
  Transaction,
  Inventory,
  StockPayload,
  StockPayloadItem,
} from '../types';
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
    this.http
      .get(this.http.inventoryRoutes.getInventories)
      .subscribe((res: Inventory[]) => {
        this.inventories = res;
        console.log('inventories.....');
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
  // handling stock submission
  submitStock(prePayload: StockPayload) {
    const payload: StockPayload = this.getPayload(prePayload);

    this.http
      .patch(this.http.inventoryRoutes.updateStock, payload)
      .subscribe((res: Inventory[]) => {
        console.log(res);
      });
  }
  public getPayload(prePayload: StockPayload) {
    return {
      store: this.storeService.getStoreID(prePayload.store),
      items: this.transformItems(prePayload.items),
    };
  }
  transformItems(items: StockPayloadItem[]) {
    items.forEach((reqItem: StockPayloadItem) => {
      reqItem.commodity = this.commodityService.getCommodityID(
        reqItem.commodity
      );
    });
    return items;
  }
  validate(request: StockPayload) {
    const isClient = this.validateStore(request.store);
    console.log(`isClient:${isClient}`);
    if (!isClient) return false;
    const isitems = this.validateitems(request.items);
    console.log(`isitems:${isitems}`);
    if (!isitems) return false;
    return true;
  }
  private validateStore(store: any) {
    const found = this.storeService.getStoreID(store);
    if (found != undefined) return true;
    return false;
  }
  private validateitems(items: StockPayloadItem[]) {
    let isitems!: boolean;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const isCommodity = this.commodityService.getCommodityID(item.commodity);

      if (isCommodity == undefined) {
        isitems = false;
        break;
      }
      isitems = true;
    }
    return isitems;
  }
}
