import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { View } from 'src/app/types';
import { Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-clinichome',
  templateUrl: './clinichome.component.html',
  styleUrls: ['./clinichome.component.css'],
})
export class ClinichomeComponent implements OnInit {
  @Input() outlets!: string[];
  @Output() emitOutlet = new EventEmitter<string>();
  constructor(public viewService: ViewService) {}

  ngOnInit(): void {}
  setView(view: View) {
    // prevents emission of these views
    if (view == this.viewService.clinicsView) {
      return;
    }

    this.viewService.setView(view);

    // this.viewChange.emit(this.view);
  }
  setOutlet(outlet: string) {
    this.emitOutlet.emit(outlet);
  }
}
