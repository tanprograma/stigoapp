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
  mainNavViews: View[] = [
    this.homeView,
    this.clinicsView,
    this.statisticsView,
    this.manageView,
  ];
  view!: View;
  constructor() {}
  setView(view: View) {
    this.view = view;
  }
}
