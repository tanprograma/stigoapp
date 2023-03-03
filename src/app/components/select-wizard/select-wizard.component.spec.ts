import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWizardComponent } from './select-wizard.component';

describe('SelectWizardComponent', () => {
  let component: SelectWizardComponent;
  let fixture: ComponentFixture<SelectWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
