import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterstatisticshomeComponent } from './masterstatisticshome.component';

describe('MasterstatisticshomeComponent', () => {
  let component: MasterstatisticshomeComponent;
  let fixture: ComponentFixture<MasterstatisticshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterstatisticshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterstatisticshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
