import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  @Input() destination!: string;
  constructor(
    public request: RequestService,
    public appData: MainappserviceService
  ) {}

  ngOnInit(): void {
    this.request.request.destination = this.destination;
  }
}
