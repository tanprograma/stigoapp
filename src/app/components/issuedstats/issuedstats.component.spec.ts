import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedstatsComponent } from './issuedstats.component';

describe('IssuedstatsComponent', () => {
  let component: IssuedstatsComponent;
  let fixture: ComponentFixture<IssuedstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
