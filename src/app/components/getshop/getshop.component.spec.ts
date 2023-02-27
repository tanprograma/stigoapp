import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetshopComponent } from './getshop.component';

describe('GetshopComponent', () => {
  let component: GetshopComponent;
  let fixture: ComponentFixture<GetshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
