import { Component, OnInit } from '@angular/core';

import { ViewService } from 'src/app/services/view.service';

import { View } from 'src/app/types';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  view!: View;

  setView(view: View) {
    // prevents emission of these views
    if (view == this.viewService.homeView) {
      this.view = view;
      return;
    }

    this.viewService.setView(view);

    // this.viewChange.emit(this.view);
  }

  constructor(
    public inventoryService: InventoryService,
    public viewService: ViewService
  ) {}

  ngOnInit(): void {
    this.viewService.view = this.viewService.homeView;
    // this.view = this.viewService.homeView;
  }
}
