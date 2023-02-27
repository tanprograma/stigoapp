import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import {
  faCog,
  faHome,
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

  @Output() returnHome = new EventEmitter<boolean>();

  dispenseView: View = { icon: faCog, view: 'dispense' };
  requestView: View = { icon: faCog, view: 'request' };
  chartsView: View = { icon: faCog, view: 'statistics' };
  issueView: View = { icon: faCog, view: 'issue' };
  homeView: View = { icon: faHome, view: 'home' };
  // dispenseView: View = { icon: faPrescriptionBottle, view: 'dispense' };
  // requestView: View = { icon: faShoppingBag, view: 'request' };
  // chartsView: View = { icon: faChartBar, view: 'statistics' };
  // issueView: View = { icon: faCross, view: 'issue' };

  views: View[] = [
    this.homeView,
    this.dispenseView,
    this.requestView,
    this.issueView,
    this.chartsView,
  ];
  // *****end of views for home
  myView!: View;
  secondaryView: View = this.dispenseView;
  isMyView: boolean = false;
  setView(view: View) {
    if (view == this.homeView) {
      this.returnBack();
      return;
    }
    console.log('...in shop');
    console.log(view);
    this.transformView(view);
  }
  returnBack() {
    this.returnHome.emit(true);
  }
  transformView(view: View) {
    this, (this.secondaryView = view);
    this.isMyView = true;
    this.myView = { icon: view.icon, view: `${this.view.view}/${view.view}` };

    console.log(this.myView);
  }

  constructor() {}

  ngOnInit(): void {
    this.myView = {
      icon: this.dispenseView.icon,
      view: `${this.view.view}/${this.dispenseView.view}`,
    };
  }
}
