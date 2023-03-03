import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/services/commodity.service';
@Component({
  selector: 'app-deletecommodity',
  templateUrl: './deletecommodity.component.html',
  styleUrls: ['./deletecommodity.component.css'],
})
export class DeletecommodityComponent implements OnInit {
  _name: string = '';
  constructor(public commodityService: CommodityService) {}

  ngOnInit(): void {}
}
