import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDebit } from './card-debit';

describe('CardDebit', () => {
  let component: CardDebit;
  let fixture: ComponentFixture<CardDebit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDebit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDebit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
