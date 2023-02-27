import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensedstatsComponent } from './dispensedstats.component';

describe('DispensedstatsComponent', () => {
  let component: DispensedstatsComponent;
  let fixture: ComponentFixture<DispensedstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensedstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensedstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
