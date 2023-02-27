import { Component, OnInit } from '@angular/core';

import { PrescriptionService } from 'src/app/services/prescription.service';
import { MainappserviceService } from 'src/app/services/mainappservice.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  @Input() host!: string;
  constructor(
    public prescription: PrescriptionService,
    public appData: MainappserviceService
  ) {}

  ngOnInit(): void {
    this.prescription.prescription.host = this.host;
  }
}
