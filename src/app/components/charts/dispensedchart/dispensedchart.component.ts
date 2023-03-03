import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { faCog, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-dispensedchart',
  templateUrl: './dispensedchart.component.html',
  styleUrls: ['./dispensedchart.component.css'],
})
export class DispensedchartComponent implements OnInit {
  @Input() view!: View;

  @Output() returnHome = new EventEmitter<boolean>();
  @Output() navigateHome = new EventEmitter<boolean>();
  constructor(public inventoryService: InventoryService) {}

  tableView: View = { icon: faCog, view: 'dashboard' };
  detailedView: View = { icon: faCog, view: 'detailed' };

  homeView: View = { icon: faHome, view: 'home' };
  backView: View = { icon: faArrowLeft, view: 'back' };
  // dispenseView: View = { icon: faPrescriptionBottle, view: 'dispense' };
  // requestView: View = { icon: faShoppingBag, view: 'request' };
  // chartsView: View = { icon: faChartBar, view: 'statistics' };
  // issueView: View = { icon: faCross, view: 'issue' };

  views: View[] = [
    this.homeView,
    this.tableView,
    this.detailedView,

    this.backView,
  ];
  // *****end of views for home
  myView!: View;
  secondaryView: View = this.tableView;
  isMyView: boolean = false;

  setView(view: View) {
    if (view == this.homeView) {
      this.returnBack();
      return;
    }
    if (view == this.backView) {
      this.navigateBack();
      return;
    }
    console.log('...in shop');
    console.log(view);
    this.transformView(view);
  }
  // the homepage
  returnBack() {
    this.returnHome.emit(true);
  }
  // same app
  navigateBack() {
    this.navigateHome.emit(true);
  }
  transformView(view: View) {
    this.secondaryView = view;
    this.isMyView = true;
    this.myView = { icon: view.icon, view: `${this.view.view}/${view.view}` };

    console.log(this.myView);
  }

  ngOnInit(): void {
    this.myView = {
      icon: this.tableView.icon,
      view: `${this.view.view}/${this.tableView.view}`,
    };
  }
}
