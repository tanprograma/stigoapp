import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { CommodityService } from 'src/app/services/commodity.service';
import { StoreService } from 'src/app/services/store.service';
import { Input } from '@angular/core';
import { RequestItem, Request } from 'src/app/types';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  @Input() client!: any;
  host!: any;
  items: RequestItem[] = [{ commodity: '', requested: 0, issued: 0 }];
  constructor(
    public requestService: RequestService,
    public storeService: StoreService,
    public commodityService: CommodityService
  ) {}

  ngOnInit(): void {}
  public add() {
    this.items.push({
      commodity: '',
      requested: 0,
      issued: 0,
    });
  }

  public remove() {
    if (this.items.length == 1) return;
    this.items.pop();
  }
  reset() {
    this.host = '';
    this.items = [{ commodity: '', requested: 0, issued: 0 }];
  }

  submit() {
    const request: Request = {
      host: this.host,
      items: this.items,
      client: this.client,
    };
    const validRequest = this.requestService.validate(request);
    if (!validRequest) return;

    this.requestService.submitRequest(request);
    this.reset();
  }
}
