import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinventoryComponent } from './manageinventory.component';

describe('ManageinventoryComponent', () => {
  let component: ManageinventoryComponent;
  let fixture: ComponentFixture<ManageinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageinventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
