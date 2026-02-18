import { Directive } from "@angular/core";

@Directive({
  selector: "app-card-header",
  host: {
    class: "card-header",
  },
})
export class CardHeaderDirective {}
