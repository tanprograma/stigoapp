import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { View } from 'src/app/types';
@Component({
  selector: 'app-selectbutton',
  templateUrl: './selectbutton.component.html',
  styleUrls: ['./selectbutton.component.css'],
})
export class SelectbuttonComponent implements OnInit {
  @Input() viewItem!: View;
  constructor() {}

  ngOnInit(): void {}
}
