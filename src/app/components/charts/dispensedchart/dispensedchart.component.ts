import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { faCog, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from 'src/app/services/inventory.service';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-dispensedchart',
  templateUrl: './dispensedchart.component.html',
  styleUrls: ['./dispensedchart.component.css'],
})
export class DispensedchartComponent implements OnInit {
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
