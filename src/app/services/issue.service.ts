import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Issue } from '../types';
@Injectable({
  providedIn: 'root',
})
export class IssueService {
  url: string = 'http://localhost:8000/requests';
  issued!: Issue[];
  constructor(private http: HttpService) {}
  postIssue(issueItem: Issue) {
    if (issueItem.isIssued) return;
    issueItem.issue_date = new Date().valueOf();
    issueItem.isIssued = true;

    const payload: any = this.getPayload(issueItem);
    this.http
      .patch(`${this.url}/${issueItem.id}`, payload)
      .subscribe((res: Issue) => {
        console.log(res);
      });
  }
  getPayload(issueItem: Issue): any {
    const { issue_date, isIssued, commodities, id } = issueItem;
    return {
      issue_date,
      isIssued,
      commodities,
    };
  }
  getIssued() {
    this.http.get(this.url).subscribe((res: Issue[]) => {
      this.issued = res.filter((item: Issue) => {
        return item.isIssued;
      });
      console.log(res);
    });
  }
}
