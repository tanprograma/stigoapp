import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  heading: string = 'tanprograma LLC';
  constructor() {}

  ngOnInit(): void {}
  getYear() {
    return new Date().getFullYear();
  }
}
