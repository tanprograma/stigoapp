import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/services/commodity.service';
import { Commodity } from 'src/app/types';
@Component({
  selector: 'app-updatecommodity',
  templateUrl: './updatecommodity.component.html',
  styleUrls: ['./updatecommodity.component.css'],
})
export class UpdatecommodityComponent implements OnInit {
  payload = {
    medicine: '',
    updated: '',
  };

  constructor(public commodityService: CommodityService) {}

  ngOnInit(): void {}
  setUpdated() {
    this.payload.updated = this.payload.medicine;
  }
}
