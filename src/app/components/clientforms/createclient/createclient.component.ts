import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/types';
@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css'],
})
export class CreateclientComponent implements OnInit {
  payload = {
    _name: '',
  };
  constructor(public clientService: ClientService) {}

  ngOnInit(): void {}
  reset(payload: Client) {
    payload._name = '';
  }
  createClient(payload: Client) {
    const valid: boolean = this.clientService.validateCreatePayload(payload);
    console.log(valid);
    if (!valid) return;

    // console.log(payload);
    this.clientService.createClient(payload);
    this.reset(payload);
  }
}
