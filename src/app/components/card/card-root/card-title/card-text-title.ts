import { Directive } from "@angular/core";

@Directive({
  selector: "app-card-text-title",
  host: {
    class: "text-lg font-medium text-gray-900 dark:text-white",
  },
})
export class CardTextTitle {}
