import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-statisticsapplication',
  templateUrl: './statisticsapplication.component.html',
  styleUrls: ['./statisticsapplication.component.css'],
})
export class StatisticsapplicationComponent implements OnInit {
  views!: View[];
  view!: View;
  home!: View;
  summaryView: View = { icon: faChartBar, view: 'summary-statistics' };
  dispensedView: View = { icon: faChartBar, view: 'dispensed-statistics' };
  receivedView: View = { icon: faChartBar, view: 'received-statistics' };

  constructor(public viewService: ViewService) {}

  ngOnInit(): void {
    this.home = this.viewService.statisticsView;
    this.view = this.home;
    this.views = [this.summaryView, this.dispensedView, this.receivedView];
    this.setViews();
  }
  setView(view: View) {
    this.view = view;
  }
  setViews() {
    this.views = [this.summaryView, this.dispensedView, this.receivedView];
  }
}
