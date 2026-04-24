import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServiceCards } from './app-service-cards';

describe('AppServiceCards', () => {
  let component: AppServiceCards;
  let fixture: ComponentFixture<AppServiceCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppServiceCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppServiceCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
