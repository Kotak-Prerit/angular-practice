import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ripples } from './ripples';

describe('Ripples', () => {
  let component: Ripples;
  let fixture: ComponentFixture<Ripples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ripples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ripples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
