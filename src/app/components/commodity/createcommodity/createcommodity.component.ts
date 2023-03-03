import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/services/commodity.service';
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
}
