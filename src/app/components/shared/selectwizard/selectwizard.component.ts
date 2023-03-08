import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-selectwizard',
  templateUrl: './selectwizard.component.html',
  styleUrls: ['./selectwizard.component.css'],
})
export class SelectwizardComponent implements OnInit {
  @Input() views!: View[];
  @Input() heading!: string;
  @Output() getView = new EventEmitter<View>();
  selectView(itemView: View) {
    console.log(itemView);
    this.getView.emit(itemView);
  }
  constructor() {}

  ngOnInit(): void {}
}
