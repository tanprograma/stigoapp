import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { InventoryService } from './inventory.service';
import { CommodityService } from './commodity.service';
import { StoreService } from './store.service';
import { ClientService } from './client.service';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { PrescriptionService } from './prescription.service';
import { RequestService } from './request.service';
@Injectable({
  providedIn: 'root',
})
export class MainappserviceService {
  constructor(
    private http: HttpService,
    private InventoryService: InventoryService,
    public commodityService: CommodityService,
    public storeService: StoreService,
    public clientService: ClientService,
    public dispenseService: PrescriptionService,
    public requesteService: RequestService
  ) {}

  // getInventory() {
  //   this.http
  //     .get('http://localhost:8000/inventory')
  //     .subscribe((res: InventoryItem[]) => {
  //       this.inventory = res;
  //       console.log(res);
  //     });
  // }

  appDataFetch() {
    console.log('appdata fetch...');
    this.commodityService.getCommodities();
    this.storeService.getStores();
    this.clientService.getClients();
    this.InventoryService.getInventory();

    this.dispenseService.getPrescriptions();
    this.requesteService.getRequested();
  }
}
