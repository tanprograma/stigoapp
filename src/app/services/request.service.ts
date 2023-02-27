import { Injectable } from '@angular/core';
import { Request } from '../classes/request';
import { HttpService } from './http.service';
import { MainappserviceService } from './mainappservice.service';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url: string = 'http://localhost:8000/requests';
  request = new Request('');
  constructor(
    private httpService: HttpService,
    private appData: MainappserviceService
  ) {}
  reset(host: string) {
    this.request = new Request(host);
    // this.request.destination = this.outletsService.outlet._id;
  }
  submitRequest(destination: string) {
    // validate prescription
    const isValid = this.validateRequest();
    if (!isValid) return;
    // dispense if valid
    const payload = this.request.getPayload();
    this.httpService.post(this.url, payload).subscribe((res: any) => {
      console.log(res);
    });
    this.reset(destination);
  }

  validateRequest() {
    // get hosts
    const hosts = this.appData.stores.map((item: any) => {
      return item.store.toLowerCase();
    });
    // get commodities
    const commodities = this.appData.commodities.map((item: any) => {
      return item.commodity;
    });
    // validate commodities
    return this.request.validate(hosts, commodities);
  }
}
