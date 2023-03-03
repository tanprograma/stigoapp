import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepstatisticComponent } from './deepstatistic.component';

describe('DeepstatisticComponent', () => {
  let component: DeepstatisticComponent;
  let fixture: ComponentFixture<DeepstatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepstatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepstatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
