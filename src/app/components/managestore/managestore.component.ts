import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
import { faCog, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-managestore',
  templateUrl: './managestore.component.html',
  styleUrls: ['./managestore.component.css'],
})
export class ManagestoreComponent implements OnInit {
  @Input() view!: View;

  @Output() returnHome = new EventEmitter<boolean>();
  @Output() navigateHome = new EventEmitter<boolean>();
  createView: View = { icon: faCog, view: 'create' };
  deleteView: View = { icon: faCog, view: 'delete' };
  updateView: View = { icon: faCog, view: 'update' };
  homeView: View = { icon: faHome, view: 'home' };
  backView: View = { icon: faArrowLeft, view: 'back' };
  views: View[] = [
    this.homeView,
    this.createView,
    this.updateView,
    this.deleteView,
    this.backView,
  ];
  // *****end of views for home
  myView!: View;
  secondaryView: View = this.createView;
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
  returnBack() {
    this.returnHome.emit(true);
  }
  navigateBack() {
    this.navigateHome.emit(true);
  }
  transformView(view: View) {
    this, (this.secondaryView = view);
    this.isMyView = true;
    this.myView = { icon: view.icon, view: `${this.view.view}/${view.view}` };

    console.log(this.myView);
  }

  constructor() {}

  ngOnInit(): void {
    this.myView = {
      icon: this.createView.icon,
      view: `${this.view.view}/${this.createView.view}`,
    };
  }
}
