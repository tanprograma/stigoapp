import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/types';
import { Input } from '@angular/core';
@Component({
  selector: 'app-issuedstats',
  templateUrl: './issuedstats.component.html',
  styleUrls: ['./issuedstats.component.css'],
})
export class IssuedstatsComponent implements OnInit {
  @Input() issued!: any;
  constructor() {}

  ngOnInit(): void {}
  inspect(issueItem: any) {
    issueItem.inspect = !issueItem.inspect;
  }
  convertDate(date: number) {
    return new Date(date).toLocaleDateString();
  }
}
