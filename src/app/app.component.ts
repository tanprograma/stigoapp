import { Component, OnInit } from '@angular/core';
import { MainappserviceService } from './services/mainappservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stigoapp';
  constructor(private mainappservice: MainappserviceService) {}
  ngOnInit(): void {
    this.mainappservice.getStores();
    this.mainappservice.getClients();
    this.mainappservice.getCommodities();
    this.mainappservice.appDataFetch();
  }
}
