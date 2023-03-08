import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { StoreService } from 'src/app/services/store.service';
import { ViewService } from 'src/app/services/view.service';
import { Store } from 'src/app/types';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';
@Component({
  selector: 'app-storeapplication',
  templateUrl: './storeapplication.component.html',
  styleUrls: ['./storeapplication.component.css'],
})
export class StoreapplicationComponent implements OnInit {
  // @Input() views!: View[];
  views!: View[];
  view!: View;
  home!: View;
  constructor(
    public storeService: StoreService,
    public viewService: ViewService
  ) {}

  ngOnInit(): void {
    this.home = this.viewService.clinicsView;
    this.view = this.home;
    this.views = this.viewService.storeViews;
    // this.setViews();
  }
  setView(view: View) {
    this.view = view;
  }
  setViews() {
    this.views = this.storeService.stores
      .filter((store: Store) => {
        return store.isOutlet || store.isWarehouse;
      })
      .map((store: Store) => {
        return { icon: faCross, view: store._name };
      })
      .sort((item1: View, item2: View) => {
        if (item1.view > item2.view) {
          return 1;
        }
        if (item1.view < item2.view) {
          return -1;
        }
        return 0;
      });
  }
}
