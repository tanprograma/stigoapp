import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
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

  @Output() returnHome = new EventEmitter<boolean>();
  @Output() navigateHome = new EventEmitter<boolean>();

  dispenseView: View = { icon: faCog, view: 'dispense' };
  requestView: View = { icon: faCog, view: 'request' };
  chartsView: View = { icon: faCog, view: 'statistics' };
  issueView: View = { icon: faCog, view: 'issue' };
  homeView: View = { icon: faHome, view: 'home' };
  backView: View = { icon: faArrowLeft, view: 'back' };

  views: View[] = [
    this.homeView,
    this.dispenseView,
    this.requestView,
    this.issueView,
    this.chartsView,
    this.backView,
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
  }

  constructor() {}

  ngOnInit(): void {
    this.myView = {
      icon: this.dispenseView.icon,
      view: `${this.view.view}/${this.chartsView.view}`,
    };
    console.log(this.view);
    console.log(this.myView);
  }
}
