import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filho } from './components/filho/filho';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FormsModule, Filho],
  templateUrl: './app.html',
})
export class App {
  @ViewChild('meuInput') meuInputEl: ElementRef<HTMLInputElement> | null = null;

  @ViewChild('filhoCompo') filhoCompo: Filho | null = null;
}
