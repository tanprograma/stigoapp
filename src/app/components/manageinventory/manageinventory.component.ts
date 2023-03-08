import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { faCog, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css'],
})
export class ManageinventoryComponent implements OnInit {
  addStockView: View = { icon: faCog, view: 'add stock' };
  // describes the primary view in header
  @Input() storeView!: View;
  @Output() sendView = new EventEmitter<View>();
  views!: View[];
  secondaryView!: View;

  createView: View = { icon: faCog, view: 'create' };
  deleteView: View = { icon: faCog, view: 'delete' };
  updateView: View = { icon: faCog, view: 'update' };

  // *****end of views for home
  ngOnInit(): void {
    this.views = [
      this.viewService.homeView,
      this.viewService.manageView,
      this.addStockView,
    ];
    this.secondaryView = this.createView;
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

  constructor(public viewService: ViewService) {}
}
