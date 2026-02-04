import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectivas } from './app-directivas';

describe('AppDirectivas', () => {
  let component: AppDirectivas;
  let fixture: ComponentFixture<AppDirectivas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDirectivas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDirectivas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
