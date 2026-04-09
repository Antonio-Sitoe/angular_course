import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-item',
  imports: [],
  templateUrl: './user-info-item.html',
  styleUrl: './user-info-item.css',
})
export class UserInfoItem {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) value: string = '';
}
