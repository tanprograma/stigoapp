import { Injectable } from '@angular/core';
import { Client } from '../types';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients!: Client[];
  constructor(private http: HttpService) {}

  getClients() {
    this.http
      .get(this.http.clientRoutes.getClients)
      .subscribe((res: Client[]) => {
        this.clients = res;
        console.log('clients....');
        console.log(res);
      });
  }
  createClient(payload: Client) {
    this.http
      .post(this.http.clientRoutes.create, payload)
      .subscribe((res: Client) => {
        this.clients.push(res);
        // this.setStoreViews();
        console.log(res);
        console.log(this.clients);
      });
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
    this.http
      .delete(`${this.http.clientRoutes.delete}/${id}`)
      .subscribe((res: any) => {
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
      _name: item.updated,
      _id: id,
    };
    // const index: number = this.commodities.findIndex((item) => {
    //   return item.id == payload.id;
    // });
    // this.commodities.splice(index, 1, payload);
    // console.log(payload);

    this.http
      .patch(`${this.http.clientRoutes.update}/${payload._id}`, payload)
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
