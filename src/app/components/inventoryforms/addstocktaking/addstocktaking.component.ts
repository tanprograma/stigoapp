import { Component, OnInit } from '@angular/core';

import { InventoryService } from 'src/app/services/inventory.service';

import { StoreService } from 'src/app/services/store.service';
import { CommodityService } from 'src/app/services/commodity.service';
import { Input } from '@angular/core';
import {
  Client,
  RequestItem,
  Request,
  StockPayload,
  StockPayloadItem,
  Store,
} from 'src/app/types';
@Component({
  selector: 'app-addstocktaking',
  templateUrl: './addstocktaking.component.html',
  styleUrls: ['./addstocktaking.component.css'],
})
export class AddstocktakingComponent implements OnInit {
  stores!: Store[];
  store!: string;
  items: StockPayloadItem[] = [{ commodity: '', beggining: 0 }];
  constructor(
    public commodityService: CommodityService,
    public storeService: StoreService,
    public inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.stores = this.storeService.stores.filter((store: Store) => {
      return store.isOutlet || store.isWarehouse;
    });
  }
  public add() {
    this.items.push({
      commodity: '',
      beggining: 0,
    });
  }

  public remove() {
    if (this.items.length == 1) return;
    this.items.pop();
  }
  reset() {
    this.store = '';
    this.items = [{ commodity: '', beggining: 0 }];
  }

  submit() {
    const request: StockPayload = {
      items: this.items,
      store: this.store,
    };
    const validRequest = this.inventoryService.validate(request);
    if (!validRequest) return;

    this.inventoryService.submitStock(request);
    console.log(request);
    this.reset();
  }
}
