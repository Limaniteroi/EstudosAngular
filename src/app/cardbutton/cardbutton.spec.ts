import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardbutton } from './cardbutton';

describe('Cardbutton', () => {
  let component: Cardbutton;
  let fixture: ComponentFixture<Cardbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
