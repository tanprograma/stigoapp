import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteclientComponent } from './deleteclient.component';

describe('DeleteclientComponent', () => {
  let component: DeleteclientComponent;
  let fixture: ComponentFixture<DeleteclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
