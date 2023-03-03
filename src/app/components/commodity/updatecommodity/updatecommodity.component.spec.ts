import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommodityComponent } from './updatecommodity.component';

describe('UpdatecommodityComponent', () => {
  let component: UpdatecommodityComponent;
  let fixture: ComponentFixture<UpdatecommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecommodityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
