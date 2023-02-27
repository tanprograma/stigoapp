import { Injectable } from '@angular/core';
import { Prescription } from '../classes/prescription';
import { HttpService } from './http.service';
import { MainappserviceService } from './mainappservice.service';
import { Commodity, Client } from '../types';
@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  url: string = 'http://localhost:8000/dispensed';
  prescription = new Prescription('');
  constructor(
    private httpService: HttpService,
    private appData: MainappserviceService
  ) {}
  reset(host: string) {
    this.prescription = new Prescription(host);
  }
  submitPrescription(host: string) {
    // validate prescription
    const isValid = this.validatePrescription();
    if (!isValid) return;
    // dispense if valid
    const payload = this.prescription.getPayload();
    this.httpService.post(this.url, payload).subscribe((res: any) => {
      console.log(res);
    });
    this.reset(host);
  }

  validatePrescription() {
    // get clients
    const clients = this.appData.clients.map((item: Client) => {
      return item.client.toLowerCase();
    });
    // get commodities
    const commodities = this.appData.commodities.map((item: Commodity) => {
      return item.commodity;
    });
    // validate commodities
    return this.prescription.validate(clients, commodities);
  }
}
