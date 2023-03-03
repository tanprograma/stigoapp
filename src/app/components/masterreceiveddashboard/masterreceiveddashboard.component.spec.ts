import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterreceiveddashboardComponent } from './masterreceiveddashboard.component';

describe('MasterreceiveddashboardComponent', () => {
  let component: MasterreceiveddashboardComponent;
  let fixture: ComponentFixture<MasterreceiveddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterreceiveddashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterreceiveddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
