import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { View } from 'src/app/types';
@Component({
  selector: 'app-receivedchart',
  templateUrl: './receivedchart.component.html',
  styleUrls: ['./receivedchart.component.css'],
})
export class ReceivedchartComponent implements OnInit {
  tableView: View = { icon: faCog, view: 'dashboard' };
  detailedView: View = { icon: faCog, view: 'detailed' };
  // describes the primary view in header
  @Input() storeView!: View;
  @Output() sendView = new EventEmitter<View>();
  views!: View[];
  secondaryView!: View;

  constructor(public viewService: ViewService) {}

  ngOnInit(): void {
    this.views = [
      this.viewService.homeView,
      this.viewService.statisticsView,
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
    if (view == this.viewService.clinicsView) {
      this.sendView.emit(view);
      return;
    }
    this.secondaryView = view;
  }
}
