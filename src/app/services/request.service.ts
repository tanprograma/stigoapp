import { Injectable } from '@angular/core';
import { Request, RequestItem } from '../types';
import { HttpService } from './http.service';
import { MainappserviceService } from './mainappservice.service';
import { CommodityService } from './commodity.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  baseURL: string = 'http://localhost:5000/requests';
  createURL: string = `${this.baseURL}/create`;
  updateURL: string = `${this.baseURL}`;
  requested!: Request[];
  request = new Request('');
  constructor(
    private commodityService: CommodityService,
    private storeService: StoreService,
    private http: HttpService
  ) {}

  getRequested() {
    this.http
      .get(this.http.requestRoutes.getRequests)
      .subscribe((res: Request[]) => {
        this.requested = res.filter((item: Request) => {
          return !item.isIssued;
        });

        // console.log(res);
      });
  }
  submitRequest(prePayload: Request) {
    const payload: Request = this.getPayload(prePayload);
    this.http
      .post(this.http.requestRoutes.create, payload)
      .subscribe((res: Request) => {
        this.requested.push(res);
      });
  }
  public getPayload(prePayload: Request) {
    return {
      host: this.storeService.getStoreID(prePayload.host),
      items: this.transformItems(prePayload.items),
      client: this.storeService.getStoreID(prePayload.client),
      isIssued: false,
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
    const isClient = this.validateHost(request.client);
    console.log(`isClient:${isClient}`);
    if (!isClient) return false;
    const isitems = this.validateitems(request.items);
    console.log(`isitems:${isitems}`);
    if (!isitems) return false;
    return true;
  }
  private validateHost(client: any) {
    const found = this.storeService.getStoreID(client);
    if (found != undefined) return true;
    return false;
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
  getIssued(filter: boolean) {
    return this.requested.filter((item: Request) => {
      return item.isIssued == filter;
    });
  }
}
