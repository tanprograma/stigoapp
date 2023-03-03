import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecollectionComponent } from './deletecollection.component';

describe('DeletecollectionComponent', () => {
  let component: DeletecollectionComponent;
  let fixture: ComponentFixture<DeletecollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
