import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { faCog, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-managestore',
  templateUrl: './managestore.component.html',
  styleUrls: ['./managestore.component.css'],
})
export class ManagestoreComponent implements OnInit {
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
      this.createView,
      this.updateView,
      this.deleteView,
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
