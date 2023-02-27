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
  constructor(private http: HttpClient) {}
  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, course: any): Observable<any> {
    return this.http.post(url, JSON.stringify(course), httpOptions);
  }
  patch(url: string, course: any): Observable<any> {
    return this.http.patch(url, JSON.stringify(course), httpOptions);
  }
}
