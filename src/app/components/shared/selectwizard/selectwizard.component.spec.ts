import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectwizardComponent } from './selectwizard.component';

describe('SelectwizardComponent', () => {
  let component: SelectwizardComponent;
  let fixture: ComponentFixture<SelectwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectwizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
