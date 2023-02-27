import { Component, OnInit } from '@angular/core';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { Issue } from 'src/app/types';
import { IssueService } from 'src/app/services/issue.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  constructor(
    public appData: MainappserviceService,
    public IssueService: IssueService
  ) {}

  ngOnInit(): void {}
  inspect(issueItem: Issue) {
    issueItem.inspect = !issueItem.inspect;
  }
  convertDate(date: number) {
    return new Date(date).toLocaleDateString();
  }
}
