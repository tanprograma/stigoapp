import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedchartComponent } from './receivedchart.component';

describe('ReceivedchartComponent', () => {
  let component: ReceivedchartComponent;
  let fixture: ComponentFixture<ReceivedchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
