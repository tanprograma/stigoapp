import { Injectable } from '@angular/core';
import { Store, View } from '../types';
import { HttpService } from './http.service';
import { faCross } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  stores!: Store[];
  storeViews!: View[];
  baseURL: string = 'http://localhost:5000/stores/';
  updateURL: string = `${this.baseURL}/update`;
  constructor(private http: HttpService) {}
  getStores() {
    this.http.get(this.baseURL).subscribe((res: Store[]) => {
      this.stores = res;
      this.setStoreViews();
      console.log(res);
    });
  }
  setStoreViews() {
    this.storeViews = this.stores.map((store: Store) => {
      return {
        icon: faCross,
        view: store._name,
      };
    });
    console.log('storeViews');
    console.log(this.storeViews);
  }
  createStore(payload: Store) {
    const valid: boolean = this.validateCreatePayload(payload);
    console.log(valid);
    if (!valid) return;

    // console.log(payload);
    this.http.post(this.baseURL, payload).subscribe((res: Store) => {
      this.stores.push(res);
      // this.setStoreViews();
      console.log(res);
      console.log(this.stores);
    });
    payload._name = '';
  }
  validateCreatePayload(payload: Store): boolean {
    const found: Store | undefined = this.stores.find((item: Store) => {
      return payload._name == item._name;
    });

    if (payload._name == '' || found != undefined) return false;
    return true;
  }
  getStoreID(store_name: any) {
    return this.stores.find((store: Store) => {
      return store._name == store_name;
    })?._id;
  }
  getStoreName(store_id: any) {
    return this.stores.find((store: Store) => {
      return store._id == store_id;
    })?._name;
  }

  updateStore(item: { _name: string; updated: string }) {
    const _id = this.getStoreID(item._name);
    const payload = {
      _name: item.updated,
      _id: _id,
    };
    // const index: number = this.commodities.findIndex((item) => {
    //   return item.id == payload.id;
    // });
    // this.commodities.splice(index, 1, payload);
    // console.log(payload);

    this.http
      .patch(`${this.updateURL}/${payload._id}`, payload)
      .subscribe((res: Store) => {
        const index: number = this.stores.findIndex((item) => {
          return item._id == payload._id;
        });
        this.stores.splice(index, 1, res);
        item._name = '';
        item.updated = '';
        console.log(res);
        console.log(this.stores);
      });
  }
}
