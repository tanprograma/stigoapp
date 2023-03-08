import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-manageapplication',
  templateUrl: './manageapplication.component.html',
  styleUrls: ['./manageapplication.component.css'],
})
export class ManageapplicationComponent implements OnInit {
  views!: View[];
  view!: View;
  home!: View;
  storeView: View = { icon: faCog, view: 'stores' };
  commodityView: View = { icon: faCog, view: 'commodities' };
  clientView: View = { icon: faCog, view: 'clients' };
  inventoryView: View = { icon: faCog, view: 'inventory' };
  constructor(public viewService: ViewService) {}

  ngOnInit(): void {
    this.home = this.viewService.manageView;
    this.view = this.home;
    this.setViews();
  }
  setView(view: View) {
    this.view = view;
  }
  setViews() {
    this.views = [
      this.storeView,
      this.commodityView,
      this.clientView,
      this.inventoryView,
    ];
  }
}
