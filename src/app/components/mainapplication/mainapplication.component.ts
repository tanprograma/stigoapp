import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { ViewService } from 'src/app/services/view.service';
import { View } from 'src/app/types';
@Component({
  selector: 'app-mainapplication',
  templateUrl: './mainapplication.component.html',
  styleUrls: ['./mainapplication.component.css'],
})
export class MainapplicationComponent implements OnInit {
  views!: View[];
  view!: View;
  home!: View;
  constructor(
    public networkService: NetworkService,
    public viewService: ViewService
  ) {}

  ngOnInit(): void {
    this.views = [
      this.viewService.clinicsView,
      this.viewService.statisticsView,
      this.viewService.manageView,
    ];
    this.home = this.viewService.homeView;
    // this.view = this.home;
    this.networkService.checkNetworkStatus();
  }
  ngOnDestroy(): void {
    this.networkService.networkStatus$.unsubscribe();
  }
  setView(view: View) {
    this.viewService.setView(view);
  }
}
