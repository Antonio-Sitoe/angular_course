import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
})
export class UserDetails {
  @Input({ required: true }) user: IUser = {} as IUser;
}
