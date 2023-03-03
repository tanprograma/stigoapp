import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensedchartComponent } from './dispensedchart.component';

describe('DispensedchartComponent', () => {
  let component: DispensedchartComponent;
  let fixture: ComponentFixture<DispensedchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensedchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensedchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
