import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { CommodityService } from './commodity.service';
import { StoreService } from './store.service';
import { ClientService } from './client.service';
import { Commodity, Client, Request, RequestItem } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  baseURL: string = 'http://localhost:5000/prescriptions/';
  createURL: string = `${this.baseURL}/create`;
  dispensed!: Request[];

  constructor(
    private http: HttpService,
    private storeService: StoreService,
    private commodityService: CommodityService,
    private clientService: ClientService
  ) {}
  getPrescriptions() {
    this.http
      .get(`${this.http.baseURL}/prescriptions`)
      .subscribe((res: Request[]) => {
        this.dispensed = res;
      });
  }
  submitPrescription(prePayload: Request) {
    const payload: Request = this.getPayload(prePayload);
    this.http
      .post(this.http.prescriptionRoutes.create, payload)
      .subscribe((res: Request) => {
        this.dispensed.push(res);
      });
  }
  public getPayload(prePayload: Request) {
    return {
      host: this.storeService.getStoreID(prePayload.host),
      items: this.transformItems(prePayload.items),
      client: this.clientService.getClientID(prePayload.client),
      isIssued: true,
    };
  }
  transformItems(items: RequestItem[]) {
    items.forEach((reqItem: RequestItem) => {
      reqItem.commodity = this.commodityService.getCommodityID(
        reqItem.commodity
      );
    });
    return items;
  }
  validate(request: Request) {
    const isClient = this.validateClient(request.client);
    console.log(`isClient:${isClient}`);
    if (!isClient) return false;
    const isitems = this.validateitems(request.items);
    console.log(`isitems:${isitems}`);
    if (!isitems) return false;
    return true;
  }
  private validateClient(client: any) {
    const found = this.clientService.getClientID(client);
    if (found == undefined) return false;
    return true;
  }
  private validateitems(items: any) {
    let isitems!: boolean;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const isCommodity = this.commodityService.getCommodityID(item.commodity);
      const isQuantity = item.requested > 0;
      if (!isQuantity || isCommodity == undefined) {
        isitems = false;
        break;
      }
      isitems = true;
    }
    return isitems;
  }
}
