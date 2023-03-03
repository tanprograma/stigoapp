import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestService } from './request.service';
import { CommodityService } from './commodity.service';
import { StoreService } from './store.service';
import { ClientService } from './client.service';
import { Request, RequestItem } from '../types';
@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issued!: Request[];
  constructor(
    private http: HttpService,
    private requestService: RequestService,
    private storeservice: StoreService,
    private clientService: ClientService,
    private commodityService: CommodityService
  ) {}
  getCommodityName(id: any) {
    return this.commodityService.getCommodityName(id);
  }
  getStoreName(id: any) {
    return this.storeservice.getStoreName(id);
  }
  getClientName(id: any) {
    return this.clientService.getClientName(id);
  }
  postIssue(issueItem: Request) {
    if (issueItem.isIssued) return;

    issueItem.isIssued = true;

    const payload: any = this.getPayload(issueItem);
    this.http
      .patch(`${this.requestService.updateURL}`, payload)
      .subscribe((res: Request) => {
        console.log(res);
      });
  }
  issueAll(issueItem: Request) {
    issueItem.items = issueItem.items.map((item: RequestItem) => {
      item.issued = item.requested;
      return item;
    });
    this.postIssue(issueItem);
  }
  getPayload(issueItem: Request): any {
    const { isIssued, items, _id } = issueItem;
    return {
      _id,
      isIssued,
      items,
    };
  }
  getIssued(filter: boolean) {
    return this.requestService.getIssued(filter);
  }
}
