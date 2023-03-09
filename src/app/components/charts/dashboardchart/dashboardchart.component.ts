import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { faCog, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from 'src/app/services/inventory.service';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-dashboardchart',
  templateUrl: './dashboardchart.component.html',
  styleUrls: ['./dashboardchart.component.css'],
})
export class DashboardchartComponent implements OnInit {
  tableView: View = { icon: faCog, view: 'dashboard' };
  detailedView: View = { icon: faCog, view: 'detailed' };
  home: View = { icon: faArrowLeft, view: 'back' };
  // describes the primary view in header
  @Input() storeView!: View;
  @Output() sendView = new EventEmitter<View>();
  views!: View[];
  secondaryView!: View;

  constructor(public viewService: ViewService) {}

  ngOnInit(): void {
    this.views = [
      this.viewService.homeView,
      this.home,
      this.tableView,
      this.detailedView,
    ];
    this.secondaryView = this.tableView;
  }
  setView(view: View) {
    if (view == this.viewService.homeView) {
      this.viewService.setView(view);
      return;
    }
    if (view == this.home) {
      this.sendView.emit(this.viewService.statisticsView);
      return;
    }
    this.secondaryView = view;
  }
}
