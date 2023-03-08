import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageapplicationComponent } from './manageapplication.component';

describe('ManageapplicationComponent', () => {
  let component: ManageapplicationComponent;
  let fixture: ComponentFixture<ManageapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
