import { Component, OnInit } from '@angular/core';
import { Store, View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import {
  faCog,
  faHome,
  faArrowLeft,
  faChartBar,
  faCross,
  faShoppingBag,
  faPrescriptionBottle,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @Input() view!: View;
  isWarehouse!: boolean;

  @Output() returnHome = new EventEmitter<boolean>();
  @Output() navigateHome = new EventEmitter<boolean>();

  dispenseView: View = { icon: faCog, view: 'dispense' };
  requestView: View = { icon: faCog, view: 'request' };
  chartsView: View = { icon: faCog, view: 'statistics' };
  issueView: View = { icon: faCog, view: 'issue' };
  homeView: View = { icon: faHome, view: 'home' };
  backView: View = { icon: faArrowLeft, view: 'back' };

  views!: View[];
  // *****end of views for home
  myView!: View;
  secondaryView!: View;
  isMyView: boolean = false;
  setView(view: View) {
    if (view == this.homeView) {
      this.returnBack();
      return;
    }
    if (view == this.backView) {
      this.navigateBack();
      return;
    }
    console.log('...in shop');
    console.log(view);
    this.transformView(view);
  }
  // the homepage
  returnBack() {
    this.returnHome.emit(true);
  }
  // same app
  navigateBack() {
    this.navigateHome.emit(true);
  }
  transformView(view: View) {
    this.secondaryView = view;
    this.isMyView = true;
    this.myView = { icon: view.icon, view: `${this.view.view}/${view.view}` };

    console.log(this.myView);
    console.log(view);
  }

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.myView = {
      icon: this.chartsView.icon,
      view: `${this.view.view}/${this.chartsView.view}`,
    };
    this.secondaryView = this.chartsView;
    console.log(this.view);
    console.log(this.myView);
    // determining if warehouse or not
    const found: any = this.storeService.stores
      .filter((store: Store) => {
        return store.isOutlet || store.isWarehouse;
      })
      .find((store: Store) => {
        return store._name == this.view.view;
      });
    if (found.isWarehouse == undefined) this.isWarehouse = false;
    if (found.isWarehouse) this.isWarehouse = true;
    this.initializeViews(this.isWarehouse);
  }
  initializeViews(condition: boolean) {
    if (condition) {
      this.views = [
        this.homeView,

        this.requestView,
        this.issueView,
        this.chartsView,
        this.backView,
      ];
      return;
    }
    this.views = [
      this.homeView,
      this.dispenseView,
      this.requestView,
      this.issueView,
      this.chartsView,
      this.backView,
    ];
  }
}
