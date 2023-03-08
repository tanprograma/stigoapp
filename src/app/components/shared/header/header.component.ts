import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() primaryView!: View;
  @Input() secondaryView!: View;
  @Input() views!: View[];
  @Output() setView = new EventEmitter<View>();
  constructor(public viewService: ViewService) {}

  ngOnInit(): void {
    // this.heading = this.viewService.view;
  }
  sendView(view: View) {
    this.setView.emit(view);
  }
}
