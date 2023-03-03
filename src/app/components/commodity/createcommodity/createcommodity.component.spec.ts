import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecommodityComponent } from './createcommodity.component';

describe('CreatecommodityComponent', () => {
  let component: CreatecommodityComponent;
  let fixture: ComponentFixture<CreatecommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecommodityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
