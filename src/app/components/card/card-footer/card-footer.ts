import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  imports: [],
  templateUrl: './card-footer.html',
})
export class CardFooter {
  @Input() class: string = '';
}
