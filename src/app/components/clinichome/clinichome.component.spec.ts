import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinichomeComponent } from './clinichome.component';

describe('ClinichomeComponent', () => {
  let component: ClinichomeComponent;
  let fixture: ComponentFixture<ClinichomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinichomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinichomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
