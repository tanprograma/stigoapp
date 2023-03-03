import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdashboarddetailedComponent } from './masterdashboarddetailed.component';

describe('MasterdashboarddetailedComponent', () => {
  let component: MasterdashboarddetailedComponent;
  let fixture: ComponentFixture<MasterdashboarddetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdashboarddetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdashboarddetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
