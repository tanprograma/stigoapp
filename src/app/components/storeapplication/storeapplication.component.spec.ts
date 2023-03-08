import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreapplicationComponent } from './storeapplication.component';

describe('StoreapplicationComponent', () => {
  let component: StoreapplicationComponent;
  let fixture: ComponentFixture<StoreapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
