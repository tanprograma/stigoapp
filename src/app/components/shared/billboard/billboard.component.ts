import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
})
export class BillboardComponent implements OnInit {
  @Input() message!: string;
  @Input() style!: { 'background-color': string; color: string };
  constructor() {}

  ngOnInit(): void {}
}
