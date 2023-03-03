import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/types';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-select-wizard',
  templateUrl: './select-wizard.component.html',
  styleUrls: ['./select-wizard.component.css'],
})
export class SelectWizardComponent implements OnInit {
  @Input() viewCollection!: string[];
  @Input() heading!: string;
  @Output() sendView = new EventEmitter<string>();
  selectView(itemView: string) {
    console.log(itemView);
    this.sendView.emit(itemView);
  }
  constructor() {}

  ngOnInit(): void {}
}
