import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
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
}
