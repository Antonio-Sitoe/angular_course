import { Component, signal } from '@angular/core';
import { Button } from './components/card/button/button';
import { Card } from './components/card/card/card';
import { CardHeader } from './components/card/card-header/card-header';
import { CardTitle } from './components/card/card-title/card-title';
import { CardDescription } from './components/card/card-description/card-description';
import { CardContent } from './components/card/card-content/card-content';
import { CardFooter } from './components/card/card-footer/card-footer';
import { CardAction } from './components/card/card-action/card-action';
import { FormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status-pipe';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    StatusPipe,
    Card,
    Button,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('newProject');
  name: string = '';
  toggle: boolean = false;

  isBig: boolean = false;
  isSmall: boolean = false;

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
