import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Commodity } from '../types';
@Injectable({
  providedIn: 'root',
})
export class CommodityService {
  baseURL: string = 'http://localhost:5000/commodities';
  createUrl: string = `${this.baseURL}/create`;
  deleteUrl: string = `${this.baseURL}/delete`;
  patchUrl: string = `${this.baseURL}/update`;

  commodities!: Commodity[];
  constructor(private http: HttpService) {}

  getCommodities() {
    this.http
      .get(this.http.commodityRoutes.getCommodities)
      .subscribe((res: Commodity[]) => {
        this.commodities = res;
        // this.setStoreViews();
        console.log('commodities....');
        console.log(res);
      });
  }
  createCommodity(payload: Commodity) {
    this.http
      .post(this.http.commodityRoutes.create, payload)
      .subscribe((res: Commodity) => {
        this.commodities.push(res);
        // this.setStoreViews();
        console.log(res);
        console.log(this.commodities);
      });
  }
  validateCreatePayload(payload: Commodity): boolean {
    const found: Commodity | undefined = this.commodities.find(
      (item: Commodity) => {
        return payload._name.toLowerCase() == item._name;
      }
    );

    if (payload._name == '' || found != undefined) return false;
    return true;
  }
  deleteCommodity(item: string) {
    const _id: any = this.getCommodityID(item);
    this.http
      .delete(`${this.http.commodityRoutes.delete}/${_id}`)
      .subscribe((res: any) => {
        console.log(res);
        const index: number = this.commodities.findIndex((item) => {
          return item._id == _id;
        });
        this.commodities.splice(index, 1);
      });
  }
  getCommodityID(commodity_name: any) {
    return this.commodities.find((commodity) => {
      return commodity._name == commodity_name.toLowerCase();
    })?._id;
  }
  getCommodityName(commodity_id: any) {
    return this.commodities.find((commodity: Commodity) => {
      return commodity._id == commodity_id;
    })?._name;
  }
  updateCommodity(item: { medicine: string; updated: string }) {
    const _id = this.getCommodityID(item.medicine);
    const payload = {
      commodity: item.updated,
      _id: _id,
    };

    this.http
      .patch(`${this.http.commodityRoutes.update}/${payload._id}`, payload)
      .subscribe((res: Commodity) => {
        const index: number = this.commodities.findIndex((item) => {
          return item._id == payload._id;
        });
        this.commodities.splice(index, 1, res);
        item.medicine = '';
        item.updated = '';
        console.log(res);
        console.log(this.commodities);
      });
  }
}
