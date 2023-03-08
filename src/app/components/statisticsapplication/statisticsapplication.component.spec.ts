import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsapplicationComponent } from './statisticsapplication.component';

describe('StatisticsapplicationComponent', () => {
  let component: StatisticsapplicationComponent;
  let fixture: ComponentFixture<StatisticsapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
