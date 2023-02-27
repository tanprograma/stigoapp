import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { View } from 'src/app/types';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() view!: View;

  constructor() {}

  ngOnInit(): void {}
}
