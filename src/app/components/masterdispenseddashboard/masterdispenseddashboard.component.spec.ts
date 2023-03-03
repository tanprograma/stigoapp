import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdispenseddashboardComponent } from './masterdispenseddashboard.component';

describe('MasterdispenseddashboardComponent', () => {
  let component: MasterdispenseddashboardComponent;
  let fixture: ComponentFixture<MasterdispenseddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdispenseddashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdispenseddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
