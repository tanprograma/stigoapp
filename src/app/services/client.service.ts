import { Injectable } from '@angular/core';
import { Client } from '../types';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseURL: string = 'http://localhost:5000/clients';
  createURL: string = `${this.baseURL}/create`;
  DeleteURL: string = `${this.baseURL}/delete`;
  patchURL: string = `${this.baseURL}/update`;

  clients!: Client[];
  constructor(private http: HttpService) {}

  getClients() {
    this.http.get(this.baseURL).subscribe((res: Client[]) => {
      this.clients = res;

      console.log(res);
    });
  }
  createClient(payload: Client) {
    const valid: boolean = this.validateCreatePayload(payload);
    console.log(valid);
    if (!valid) return;

    // console.log(payload);
    this.http.post(this.createURL, payload).subscribe((res: Client) => {
      this.clients.push(res);
      // this.setStoreViews();
      console.log(res);
      console.log(this.clients);
    });
    payload._name = '';
  }
  validateCreatePayload(payload: Client): boolean {
    const found: Client | undefined = this.clients.find((item: Client) => {
      return payload._name.toLowerCase() == item._name;
    });

    if (payload._name == '' || found != undefined) return false;
    return true;
  }
  deleteClient(item: string) {
    const id: any = this.getClientID(item);
    this.http.delete(`${this.DeleteURL}/${id}`).subscribe((res: any) => {
      console.log(res);
      const index: number = this.clients.findIndex((item) => {
        return item._id == id;
      });
      this.clients.splice(index, 1);
    });
  }
  getClientID(client_name: string) {
    return this.clients.find((client: Client) => {
      return client._name == client_name.toLowerCase();
    })?._id;
  }
  getClientName(client_id: any) {
    return this.clients.find((client: Client) => {
      return client._id == client_id;
    })?._name;
  }
  updateClient(item: { client: string; updated: string }) {
    const id = this.getClientID(item.client);
    const payload = {
      commodity: item.updated,
      _id: id,
    };
    // const index: number = this.commodities.findIndex((item) => {
    //   return item.id == payload.id;
    // });
    // this.commodities.splice(index, 1, payload);
    // console.log(payload);

    this.http
      .patch(`${this.patchURL}/${payload._id}`, payload)
      .subscribe((res: Client) => {
        const index: number = this.clients.findIndex((item) => {
          return item._id == payload._id;
        });
        this.clients.splice(index, 1, res);
        item.client = '';
        item.updated = '';
        console.log(res);
        console.log(this.clients);
      });
  }
}
