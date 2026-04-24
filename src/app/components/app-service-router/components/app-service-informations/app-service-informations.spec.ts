import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServiceInformations } from './app-service-informations';

describe('AppServiceInformations', () => {
  let component: AppServiceInformations;
  let fixture: ComponentFixture<AppServiceInformations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppServiceInformations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppServiceInformations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
