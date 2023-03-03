import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestoreComponent } from './updatestore.component';

describe('UpdatestoreComponent', () => {
  let component: UpdatestoreComponent;
  let fixture: ComponentFixture<UpdatestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
