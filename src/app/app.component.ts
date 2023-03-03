import { Component, OnInit } from '@angular/core';
import { MainappserviceService } from './services/mainappservice.service';
import { StoreService } from './services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stigoapp';
  constructor(private mainappservice: MainappserviceService) {}
  ngOnInit(): void {
    this.mainappservice.appDataFetch();
  }
}
