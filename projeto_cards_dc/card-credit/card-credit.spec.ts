import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCredit } from './card-credit';

describe('CardCredit', () => {
  let component: CardCredit;
  let fixture: ComponentFixture<CardCredit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCredit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCredit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
