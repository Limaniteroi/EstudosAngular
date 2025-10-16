import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRosa } from './card-rosa';

describe('CardRosa', () => {
  let component: CardRosa;
  let fixture: ComponentFixture<CardRosa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRosa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRosa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
