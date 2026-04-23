import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodos } from './user-todos';

describe('UserTodos', () => {
  let component: UserTodos;
  let fixture: ComponentFixture<UserTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTodos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
