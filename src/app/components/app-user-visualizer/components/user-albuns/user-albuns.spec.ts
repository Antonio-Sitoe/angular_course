import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbuns } from './user-albuns';

describe('UserAlbuns', () => {
  let component: UserAlbuns;
  let fixture: ComponentFixture<UserAlbuns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAlbuns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAlbuns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
