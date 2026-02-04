import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FormsModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('newProject');
  value = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  handleChange(event: any) {
    console;
    this.value = event.target.value;
  }

  changeDetetion(meuInput: HTMLInputElement) {
    this.changeDetectorRef.detectChanges();
    console.log(meuInput);
  }
}
