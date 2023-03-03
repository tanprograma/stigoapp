import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdispenseddetailedComponent } from './masterdispenseddetailed.component';

describe('MasterdispenseddetailedComponent', () => {
  let component: MasterdispenseddetailedComponent;
  let fixture: ComponentFixture<MasterdispenseddetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdispenseddetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdispenseddetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
