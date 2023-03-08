import { Injectable } from '@angular/core';
import { View } from '../types';
import {
  faCog,
  faHome,
  faChartBar,
  faCross,
} from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class ViewService {
  manageView: View = { icon: faCog, view: 'manage' };
  homeView: View = { icon: faHome, view: 'homepage' };
  statisticsView: View = { icon: faChartBar, view: 'statistics' };
  clinicsView: View = { icon: faCross, view: 'clinics' };
  mainViews: View[] = [
    { icon: faCog, view: 'manage' },
    { icon: faHome, view: 'homepage' },
    { icon: faChartBar, view: 'statistics' },
    { icon: faCross, view: 'clinics' },
  ];
  storeViews: View[] = [
    { icon: faCog, view: 'powerhouse' },
    { icon: faHome, view: 'rightvbank' },
    { icon: faChartBar, view: 'saddledam' },
    { icon: faCross, view: 'mainclinic' },
  ];
  shopViewDefault: View = { icon: faCog, view: 'dispense' };
  shopViews: View[] = [
    this.homeView,
    this.clinicsView,
    this.shopViewDefault,
    { icon: faHome, view: 'request' },
    { icon: faChartBar, view: 'issue' },
    { icon: faCross, view: 'statistics' },
  ];
  statisticsViews: View[] = [
    { icon: faCross, view: 'clinic' },
    { icon: faCross, view: 'clinic' },
    { icon: faCross, view: 'clinic' },
    { icon: faCross, view: 'clinic' },
  ];
  manageViews: View[] = [
    { icon: faCog, view: 'manage' },
    { icon: faHome, view: 'homepage' },
    { icon: faChartBar, view: 'statistics' },
    { icon: faCross, view: 'clinics' },
  ];
  view: View = this.homeView;
  constructor() {}
  setView(view: View) {
    this.view = view;
  }
}
