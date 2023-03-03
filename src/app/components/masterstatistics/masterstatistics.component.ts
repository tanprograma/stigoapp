import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-masterstatistics',
  templateUrl: './masterstatistics.component.html',
  styleUrls: ['./masterstatistics.component.css'],
})
export class MasterstatisticsComponent implements OnInit {
  home: string = 'home';
  view!: string;
  dashboardItem: string = 'dashboard summary';
  dispensedItem: string = 'dispensed';
  receivedItem: string = 'received';
  issuedItem: string = 'issued';

  constructor(private viewService: ViewService) {}
  faChartBar = faChartBar;
  ngOnInit(): void {
    this.view = this.home;
  }
  returnHome(clicked: boolean) {
    this.viewService.setView(this.viewService.homeView);
  }
  getItems() {
    return [
      this.dashboardItem,
      this.dispensedItem,
      this.receivedItem,
      this.issuedItem,
    ].sort((item1: string, item2: string) => {
      if (item1 > item2) {
        return 1;
      }
      if (item1 < item2) {
        return -1;
      }
      return 0;
    });
  }
}
