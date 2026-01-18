import { Component, signal } from '@angular/core';
import { UserDetails } from './components/user-details/user-details';
import { Filter } from './components/filter/filter';
import { UsersListComponent } from './components/users-list/users-list.component';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  imports: [UserDetails, Filter, UsersListComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('newProject');
  name: string = '';
  toggle: boolean = false;

  isBig: boolean = false;
  isSmall: boolean = false;

  selectedUser: IUser = UsersList[0];

  listPessoas = [
    {
      name: 'John Doe',
      age: 20,
      status: 1,
    },
    {
      name: 'João Doe',
      age: 21,
      status: 2,
    },
    {
      name: 'Maria Doe',
      age: 22,
      status: 1,
    },
  ];

  onActionButtonClick() {
    console.log('Root: Action button clicked', this.name);
    this.toggle = !this.toggle;
    this.isSmall = true;
    this.isBig = false;
  }

  onCanceButtonClick() {
    console.log('Root: Cancel button clicked');
    this.toggle = !this.toggle;
    this.isBig = true;
    this.isSmall = false;
  }

  onNameChange(value: string) {
    console.log('Root: Name changed', value);
    this.name = value;
  }
}
