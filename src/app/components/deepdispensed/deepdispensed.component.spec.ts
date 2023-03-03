import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepdispensedComponent } from './deepdispensed.component';

describe('DeepdispensedComponent', () => {
  let component: DeepdispensedComponent;
  let fixture: ComponentFixture<DeepdispensedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepdispensedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepdispensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
