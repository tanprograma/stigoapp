import { Component, OnInit } from '@angular/core';

import { faCross } from '@fortawesome/free-solid-svg-icons';
import { Store, View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  home: string = 'home';
  view!: string;
  clientsItem: string = 'clients';
  commoditiesItem: string = 'commodities';
  storesItem: string = 'stores';
  inventoriesItem: string = 'inventories';

  constructor(private viewService: ViewService) {}
  faCross = faCross;
  ngOnInit(): void {
    this.view = this.home;
  }
  returnHome(clicked: boolean) {
    this.viewService.setView(this.viewService.homeView);
  }
  getItems() {
    return [
      this.clientsItem,
      this.commoditiesItem,
      this.storesItem,
      this.inventoriesItem,
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
