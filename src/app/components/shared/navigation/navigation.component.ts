import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() views!: View[];
  @Output() setView = new EventEmitter<View>();

  constructor() {}

  ngOnInit(): void {}
  navClick(view: View) {
    console.log(view);
    this.setView.emit(view);
  }
}
