import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterstatisticsComponent } from './masterstatistics.component';

describe('MasterstatisticsComponent', () => {
  let component: MasterstatisticsComponent;
  let fixture: ComponentFixture<MasterstatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterstatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
