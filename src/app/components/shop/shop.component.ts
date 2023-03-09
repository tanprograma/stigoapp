import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { View } from 'src/app/types';
import {
  faCross,
  faArrowLeft,
  faPrescription,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  // describes the primary view in header
  @Input() storeView!: View;
  @Output() sendView = new EventEmitter<View>();
  views!: View[];
  secondaryView!: View;
  home: View = { icon: faArrowLeft, view: 'back' };
  dispenseView: View = { icon: faPrescription, view: 'dispense' };
  requestView: View = { icon: faPrescription, view: 'request' };
  issueView: View = { icon: faPrescription, view: 'issue' };
  statisticsView: View = { icon: faChartPie, view: 'statistics' };

  constructor(public viewService: ViewService) {}

  ngOnInit(): void {
    this.views = [
      this.viewService.homeView,
      this.home,
      this.dispenseView,
      this.requestView,
      this.issueView,
      this.statisticsView,
    ];
    this.secondaryView = this.statisticsView;
  }
  setView(view: View) {
    if (view == this.viewService.homeView) {
      this.viewService.setView(view);
      return;
    }
    if (view == this.home) {
      this.sendView.emit(this.viewService.clinicsView);
      return;
    }
    this.secondaryView = view;
  }
}
