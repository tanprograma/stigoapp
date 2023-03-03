import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/types';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-updatestore',
  templateUrl: './updatestore.component.html',
  styleUrls: ['./updatestore.component.css'],
})
export class UpdatestoreComponent implements OnInit {
  payload = {
    _name: '',
    updated: '',
  };
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {}
  setUpdated() {
    this.payload.updated = this.payload._name;
  }
}
