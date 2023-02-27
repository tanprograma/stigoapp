import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/types';
import { Input } from '@angular/core';
@Component({
  selector: 'app-issuedstats',
  templateUrl: './issuedstats.component.html',
  styleUrls: ['./issuedstats.component.css'],
})
export class IssuedstatsComponent implements OnInit {
  @Input() issued!: Issue[];
  constructor() {}

  ngOnInit(): void {}
  inspect(issueItem: Issue) {
    issueItem.inspect = !issueItem.inspect;
  }
  convertDate(date: number) {
    return new Date(date).toLocaleDateString();
  }
}
