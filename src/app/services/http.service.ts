import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL: string = 'http://192.168.172.75:5000';
  storeRoutes = {
    create: `${this.baseURL}/stores/create`,
    getStores: `${this.baseURL}/stores`,
    update: `${this.baseURL}/stores/update`,
    delete: `${this.baseURL}/stores/delete`,
  };
  commodityRoutes = {
    create: `${this.baseURL}/commodities/create`,
    getCommodities: `${this.baseURL}/commodities`,
    update: `${this.baseURL}/commodities/update`,
    delete: `${this.baseURL}/commodities/delete`,
  };
  clientRoutes = {
    create: `${this.baseURL}/clients/create`,
    getClients: `${this.baseURL}/clients`,
    update: `${this.baseURL}/clients/update`,
    delete: `${this.baseURL}/clients/delete`,
  };
  prescriptionRoutes = {
    create: `${this.baseURL}/prescriptions/create`,
    getPrescriptions: `${this.baseURL}/prescriptions`,
    update: `${this.baseURL}/prescriptions/update`,
    delete: `${this.baseURL}/prescriptions/delete`,
  };
  requestRoutes = {
    create: `${this.baseURL}/requests/create`,
    getRequests: `${this.baseURL}/requests`,
    update: `${this.baseURL}/requests/update`,
    delete: `${this.baseURL}/requests/delete`,
  };
  inventoryRoutes = {
    create: `${this.baseURL}/inventories/create`,
    getInventories: `${this.baseURL}/inventories`,
    updateStock: `${this.baseURL}/inventories/update/stock`,
    delete: `${this.baseURL}/inventories/delete`,
  };
  // baseURL: string = http://localhost:5000;
  constructor(private http: HttpClient) {}
  get(url: string): Observable<any> {
    return this.http.get(url);
  }
  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  post(url: string, course: any): Observable<any> {
    return this.http.post(url, JSON.stringify(course), httpOptions);
  }
  patch(url: string, course: any): Observable<any> {
    return this.http.patch(url, JSON.stringify(course), httpOptions);
  }
}
