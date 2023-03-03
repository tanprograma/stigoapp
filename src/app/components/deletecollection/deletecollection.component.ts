import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-deletecollection',
  templateUrl: './deletecollection.component.html',
  styleUrls: ['./deletecollection.component.css'],
})
export class DeletecollectionComponent implements OnInit {
  @Input() items!: any;
  @Output() onDelete = new EventEmitter<any>();
  item!: any;
  constructor() {}

  ngOnInit(): void {}
  delete() {
    this.onDelete.emit(this.item);
  }
}
