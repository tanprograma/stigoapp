import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommodityComponent } from './deletecommodity.component';

describe('DeletecommodityComponent', () => {
  let component: DeletecommodityComponent;
  let fixture: ComponentFixture<DeletecommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecommodityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
