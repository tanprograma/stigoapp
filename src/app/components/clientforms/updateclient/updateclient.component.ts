import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
})
export class UpdateclientComponent implements OnInit {
  payload = {
    client: '',
    updated: '',
  };

  constructor(public clientService: ClientService) {}

  ngOnInit(): void {}
  setUpdated() {
    this.payload.updated = this.payload.client;
  }
}
