import { Component, OnInit } from '@angular/core';
import { View, Store } from 'src/app/types';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import {
  faCross,
  faChartBar,
  faCog,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.css'],
})
export class MainappComponent implements OnInit {
  faCross = faCross;
  // views for home
  manageView: View = { icon: faCog, view: 'manage' };
  homeView: View = { icon: faHome, view: 'homepage' };
  statisticsView: View = { icon: faChartBar, view: 'statistics' };
  clinicsView: View = { icon: faCross, view: 'clinics' };
  storeViews!: View[];

  setClinicView(outlet: View) {
    this.view = outlet;
    console.log('view...');
    console.log(this.view);
  }
  getClinicView(outlet: Store) {
    return { icon: faCross, view: outlet.store };
  }

  views: View[] = [
    this.homeView,
    this.clinicsView,
    this.statisticsView,
    this.manageView,
  ];
  // *****end of views for home
  view: View = this.homeView;
  // setView(view: View) {
  //   this.view = view;
  // }
  constructor(public dataService: MainappserviceService) {}
  returnHome(event: boolean) {
    if (event) {
      this.resetViews();
      this.view = this.homeView;
    }
  }
  resetViews() {
    this.manageView = { icon: faCog, view: 'manage' };
    this.homeView = { icon: faHome, view: 'homepage' };
    this.statisticsView = { icon: faChartBar, view: 'statistics' };
    this.clinicsView = { icon: faCross, view: 'clinics' };
    this.views = [
      this.homeView,
      this.clinicsView,
      this.statisticsView,
      this.manageView,
    ];
  }

  ngOnInit(): void {}
}
