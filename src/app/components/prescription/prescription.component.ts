import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { ClientService } from 'src/app/services/client.service';
import { CommodityService } from 'src/app/services/commodity.service';
import { Input } from '@angular/core';
import { Client, RequestItem, Request } from 'src/app/types';
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  @Input() host!: string;
  client!: string;
  items: RequestItem[] = [{ commodity: '', requested: 0, issued: 0 }];
  constructor(
    public prescriptionService: PrescriptionService,
    public clientService: ClientService,
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
  onRequestedChange(item: RequestItem) {
    item.issued = item.requested;
  }
  public remove() {
    if (this.items.length == 1) return;
    this.items.pop();
  }
  reset() {
    this.client = '';
    this.items = [{ commodity: '', requested: 0, issued: 0 }];
  }

  dispense() {
    const request: Request = {
      host: this.host,
      items: this.items,
      client: this.client,
    };
    const validRequest = this.prescriptionService.validate(request);
    if (!validRequest) return;

    this.prescriptionService.submitPrescription(request);
    // console.log(request);
    this.reset();
  }
}
