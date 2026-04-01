import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderExternal } from './form-builder-external';

describe('FormBuilderExternal', () => {
  let component: FormBuilderExternal;
  let fixture: ComponentFixture<FormBuilderExternal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderExternal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderExternal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
