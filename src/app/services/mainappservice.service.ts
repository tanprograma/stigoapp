import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Store, View, Client, Commodity, Issue, InventoryItem } from '../types';
import { InventoryService } from './inventory.service';
import { faCross } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class MainappserviceService {
  public stores!: Store[];
  public inventory!: InventoryItem[];
  public clients!: Client[];
  public commodities!: Commodity[];
  public requested!: Issue[];
  storeViews!: View[];
  constructor(
    private http: HttpService,
    private InventoryService: InventoryService
  ) {}
  getStores() {
    this.http.get('http://localhost:8000/stores').subscribe((res: Store[]) => {
      this.stores = res;
      this.setStoreViews();
      console.log(res);
    });
  }

  // getInventory() {
  //   this.http
  //     .get('http://localhost:8000/inventory')
  //     .subscribe((res: InventoryItem[]) => {
  //       this.inventory = res;
  //       console.log(res);
  //     });
  // }
  getRequested() {
    this.http
      .get('http://localhost:8000/requests')
      .subscribe((res: Issue[]) => {
        this.requested = res
          .map((item: Issue) => {
            const {
              request_date,
              commodities,
              isIssued,
              id,
              host,
              destination,
            } = item;
            return {
              request_date,
              commodities,
              isIssued,
              id,
              host,
              destination,
              inspect: false,
            };
          })
          .filter((item: Issue) => {
            return !item.isIssued;
          });

        // console.log(res);
      });
  }
  getClients() {
    this.http
      .get('http://localhost:8000/clients')
      .subscribe((res: Client[]) => {
        this.clients = res;
        // this.setStoreViews();
        console.log(res);
      });
  }
  getCommodities() {
    this.http
      .get('http://localhost:8000/commodities')
      .subscribe((res: Commodity[]) => {
        this.commodities = res;
        // this.setStoreViews();
        console.log(res);
      });
  }
  setStoreViews() {
    this.storeViews = this.stores.map((store: Store) => {
      return {
        icon: faCross,
        view: store.store,
      };
    });
    console.log('storeViews');
    console.log(this.storeViews);
  }
  appDataFetch() {
    console.log('appdata fetch...');
    this.InventoryService.getInventory();
  }
}
