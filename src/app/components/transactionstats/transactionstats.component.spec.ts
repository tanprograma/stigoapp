import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionstatsComponent } from './transactionstats.component';

describe('TransactionstatsComponent', () => {
  let component: TransactionstatsComponent;
  let fixture: ComponentFixture<TransactionstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
