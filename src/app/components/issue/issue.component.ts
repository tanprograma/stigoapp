import { Component, OnInit, Input } from '@angular/core';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { Request } from 'src/app/types';
import { RequestService } from 'src/app/services/request.service';
import { IssueService } from 'src/app/services/issue.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  @Input() host!: string;
  requests: any;
  constructor(
    public appData: MainappserviceService,
    public issueService: IssueService,
    public requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.requests = this.issueService
      .getIssued(false, this.host)
      .map((item: Request, index: number) => {
        const { _id, host, client, items, request_date, isIssued } = item;
        return {
          _id,
          sn: index + 1,
          host,
          client,
          items,
          request_date,
          isIssued,
          inspect: false,
        };
      });
  }
  inspect(issueItem: any) {
    issueItem.inspect = !issueItem.inspect;
  }
  convertDate(date: number) {
    return new Date(date).toLocaleDateString();
  }
}
