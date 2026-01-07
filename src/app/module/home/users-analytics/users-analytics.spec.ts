import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAnalytics } from './users-analytics';

describe('UsersAnalytics', () => {
  let component: UsersAnalytics;
  let fixture: ComponentFixture<UsersAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
