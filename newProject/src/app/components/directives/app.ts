// import { Component, signal } from '@angular/core';
// import { UserDetails } from './components/user-details/user-details';
// import { Filter } from './components/filter/filter';
// import { UsersListComponent } from './components/users-list/users-list.component';
// import { IUser } from './interfaces/user/user.interface';
// import { UsersList } from './data/users-list';

// @Component({
//   selector: 'app-root',
//   imports: [UserDetails, Filter, UsersListComponent],
//   templateUrl: './app.html',
// })
// export class App {
//   protected readonly title = signal('newProject');
//   name: string = '';
//   toggle: boolean = false;
//   usersList = UsersList;

//   isBig: boolean = false;
//   isSmall: boolean = false;

//   selectedUser: IUser | null = null;

//   onUserSelected(user: IUser) {
//     this.selectedUser = user;
//   }

//   onActionButtonClick() {
//     this.toggle = !this.toggle;
//     this.isSmall = true;
//     this.isBig = false;
//   }

//   onCanceButtonClick() {
//     this.toggle = !this.toggle;
//     this.isBig = true;
//     this.isSmall = false;
//   }

//   onNameChange(value: string) {
//     this.name = value;
//   }
// }
