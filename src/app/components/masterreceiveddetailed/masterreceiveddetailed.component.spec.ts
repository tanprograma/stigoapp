import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterreceiveddetailedComponent } from './masterreceiveddetailed.component';

describe('MasterreceiveddetailedComponent', () => {
  let component: MasterreceiveddetailedComponent;
  let fixture: ComponentFixture<MasterreceiveddetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterreceiveddetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterreceiveddetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
