import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestoreComponent } from './deletestore.component';

describe('DeletestoreComponent', () => {
  let component: DeletestoreComponent;
  let fixture: ComponentFixture<DeletestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletestoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
