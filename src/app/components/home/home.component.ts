import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { View, Store } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() views!: View[];
  @Input() view!: View;
  @Input() clinicsView!: View;
  @Input() statisticsView!: View;
  @Input() outlets!: View[];
  @Output() viewChange = new EventEmitter<View>();
  @Output() sendOutlet = new EventEmitter<View>();
  // view: View = { icon: faHome, view: 'homepage' };

  setView(view: View) {
    if (view == this.clinicsView) {
      this.view = view;
      return;
    }
    this.view = view;
    this.viewChange.emit(this.view);
  }
  setOutlet(outlet: View) {
    this.sendOutlet.emit(outlet);
  }
  constructor() {}

  ngOnInit(): void {}
}
