import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainapplicationComponent } from './mainapplication.component';

describe('MainapplicationComponent', () => {
  let component: MainapplicationComponent;
  let fixture: ComponentFixture<MainapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
