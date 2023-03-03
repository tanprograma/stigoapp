import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { View } from 'src/app/types';
import { Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-managehome',
  templateUrl: './managehome.component.html',
  styleUrls: ['./managehome.component.css'],
})
export class ManagehomeComponent implements OnInit {
  @Input() outlets!: string[];
  @Output() emitOutlet = new EventEmitter<string>();
  constructor(public viewService: ViewService) {}

  ngOnInit(): void {}
  setView(view: View) {
    // prevents emission of these views
    if (view == this.viewService.manageView) {
      return;
    }

    this.viewService.setView(view);

    // this.viewChange.emit(this.view);
  }
  setOutlet(outlet: string) {
    this.emitOutlet.emit(outlet);
  }
}
