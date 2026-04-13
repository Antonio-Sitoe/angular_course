import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardTitle,
  MatCardSubtitle,
  MatCardActions,
} from '@angular/material/card';
import { ICountryUserInterface } from '../../interfaces/country/country.user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  imports: [CommonModule, MatCard, MatCardTitle, MatCardContent, MatCardSubtitle],
})
export class UsersListComponent {
  @Input({ required: true }) usersList: ICountryUserInterface[] = [];
  @Input() selectedUser: ICountryUserInterface | null = null;

  @Output('userSelected') userSelectedEmitt = new EventEmitter<ICountryUserInterface>();

  onUserSelected(user: ICountryUserInterface) {
    this.userSelectedEmitt.emit(user);
  }

  isUserSelected(user: ICountryUserInterface): boolean {
    return this.selectedUser?.email === user.email;
  }

  formatDate(dateString: string): string {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '-';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  formatStatus(ativo: boolean): string {
    return ativo ? 'Ativo' : 'Inativo';
  }
}
