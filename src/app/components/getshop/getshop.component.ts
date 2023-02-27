import { Component, OnInit } from '@angular/core';
import { View, Store } from 'src/app/types';
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
  selector: 'app-getshop',
  templateUrl: './getshop.component.html',
  styleUrls: ['./getshop.component.css'],
})
export class GetshopComponent implements OnInit {
  @Input() outlets!: View[];
  @Output() sendOutlet = new EventEmitter<View>();
  selectOutlet(outlet: View) {
    console.log(outlet);
    this.sendOutlet.emit(outlet);
  }
  // @Input() views!: Store[];
  // views for shop
  // @Output() returnHome = new EventEmitter<View>();
  // homeView: View = { icon: faHome, view: 'home' };
  // dispenseView: View = { icon: faPrescriptionBottle, view: 'dispense' };
  // requestView: View = { icon: faShoppingBag, view: 'request' };
  // chartsView: View = { icon: faChartBar, view: 'statistics' };
  // issueView: View = { icon: faCross, view: 'issue' };

  // shopViews: View[] = [
  //   this.homeView,
  //   this.dispenseView,
  //   this.requestView,
  //   this.issueView,
  //   this.chartsView,
  // ];
  // *****end of views for home
  // view!: View;
  // setView(view: View) {
  //   if (view == this.homeView) {
  //     this.setHomeView(view);
  //     return;
  //   }
  //   this.view = view;
  // }
  // setHomeView(view: View) {
  //   this.returnHome.emit(view);
  // }
  constructor() {}

  ngOnInit(): void {}
}
