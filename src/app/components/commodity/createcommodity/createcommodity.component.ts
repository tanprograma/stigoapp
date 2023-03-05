import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/services/commodity.service';
import { Commodity } from 'src/app/types';
@Component({
  selector: 'app-createcommodity',
  templateUrl: './createcommodity.component.html',
  styleUrls: ['./createcommodity.component.css'],
})
export class CreatecommodityComponent implements OnInit {
  payload = {
    _name: '',
  };
  constructor(public commodityService: CommodityService) {}

  ngOnInit(): void {}
  reset() {
    this.payload._name = '';
  }
  createCommodity() {
    const valid: boolean = this.commodityService.validateCreatePayload(
      this.payload
    );
    console.log(valid);
    if (!valid) return;

    // console.log(this.payload);
    this.commodityService.createCommodity(this.payload);
    this.reset();
  }
}
