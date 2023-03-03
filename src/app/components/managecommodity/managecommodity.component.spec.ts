import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecommodityComponent } from './managecommodity.component';

describe('ManagecommodityComponent', () => {
  let component: ManagecommodityComponent;
  let fixture: ComponentFixture<ManagecommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecommodityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
