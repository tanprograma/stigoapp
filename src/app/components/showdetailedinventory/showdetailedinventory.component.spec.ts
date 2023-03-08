import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailedinventoryComponent } from './showdetailedinventory.component';

describe('ShowdetailedinventoryComponent', () => {
  let component: ShowdetailedinventoryComponent;
  let fixture: ComponentFixture<ShowdetailedinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetailedinventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdetailedinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
