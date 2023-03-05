import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstocktakingComponent } from './addstocktaking.component';

describe('AddstocktakingComponent', () => {
  let component: AddstocktakingComponent;
  let fixture: ComponentFixture<AddstocktakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstocktakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstocktakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
