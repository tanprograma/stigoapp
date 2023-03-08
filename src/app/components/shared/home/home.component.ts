import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() views!: View[];
  @Input() heading!: string;
  @Input() homeView!: View;
  @Output() getView = new EventEmitter<View>();
  constructor(private viewService: ViewService) {}

  ngOnInit(): void {}
  setView(view: View) {
    this.getView.emit(view);
  }
}
