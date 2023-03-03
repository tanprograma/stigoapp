import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.css'],
})
export class CreatestoreComponent implements OnInit {
  payload = {
    _name: '',
  };

  constructor(public storeService: StoreService) {}

  ngOnInit(): void {}
}
