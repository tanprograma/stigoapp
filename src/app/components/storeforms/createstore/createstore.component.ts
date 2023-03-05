import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/types';
@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.css'],
})
export class CreatestoreComponent implements OnInit {
  _name: string = '';

  storeType!: string;
  isWarehouse: string = 'warehouse';
  isOutlet: string = 'outlet';
  isSupplier: string = 'supplier';
  storeTypes: string[] = [this.isOutlet, this.isWarehouse, this.isSupplier];
  constructor(public storeService: StoreService) {}
  reset() {
    this._name = '';
    this.storeType = '';
  }
  ngOnInit(): void {}
  createStore() {
    if (!this.validateStoreType()) return;
    const payload: Store = this.getPayload();
    const valid: boolean = this.storeService.validateCreatePayload(payload);
    console.log(valid);
    if (!valid) return;
    // console.log(payload);
    this.storeService.createStore(payload);
    this.reset();
  }
  validateStoreType() {
    const found: any = this.storeTypes.find((item) => {
      return item == this.storeType;
    });
    if (found == undefined) return false;
    return true;
  }
  getPayload(): Store {
    if (this.storeType == this.isWarehouse) {
      return {
        _name: this._name,
        isWarehouse: true,
      };
    } else if (this.storeType == this.isOutlet) {
      return {
        _name: this._name,
        isOutlet: true,
      };
    } else {
      return {
        _name: this._name,
        isSupplier: true,
      };
    }
  }
}
