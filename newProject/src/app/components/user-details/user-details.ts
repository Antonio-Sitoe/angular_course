import { IUser } from '../../interfaces/user/user.interface';
import { PhonePipe } from '../../pipes/phone-pipe';
import { AdressPipe } from '../../pipes/adress-pipe';
import { StatusPipe } from '../../pipes/status-pipe';
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EmptyFieldPipe } from '../../interfaces/user/empty-field-pipe';

@Component({
  selector: 'app-user-details',
  imports: [PhonePipe, AdressPipe, DatePipe, EmptyFieldPipe],
  templateUrl: './user-details.html',
})
export class UserDetails {
  @Input({ required: true }) user: IUser = {} as IUser;
  formatStatus(ativo: boolean): string {
    return ativo ? 'Ativo' : 'Inativo';
  }
}
