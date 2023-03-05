import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { Store, View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent implements OnInit {
  home: string = 'home';
  view!: string;
  clinics!: string[];
  constructor(
    public storeService: StoreService,
    private viewService: ViewService
  ) {}
  faCross = faCross;
  ngOnInit(): void {
    this.view = this.home;
    this.clinics = this.getClinics();
  }
  returnHome(clicked: boolean) {
    this.viewService.setView(this.viewService.homeView);
  }
  getClinics() {
    return this.storeService.stores
      .filter((store: Store) => {
        return store.isOutlet || store.isWarehouse;
      })
      .map((store: Store) => {
        return store._name;
      })
      .sort((item1: string, item2: string) => {
        if (item1 > item2) {
          return 1;
        }
        if (item1 < item2) {
          return -1;
        }
        return 0;
      });
  }
}
