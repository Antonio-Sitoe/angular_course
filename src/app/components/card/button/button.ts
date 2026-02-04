import { Component, EventEmitter, Output } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  @Output() onClick = new EventEmitter<User>();

  onButtonClick() {
    this.onClick.emit();
  }
}
