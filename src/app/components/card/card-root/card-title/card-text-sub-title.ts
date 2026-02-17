import { Directive } from "@angular/core";

@Directive({
  selector: "app-card-text-sub-title",
  host: {
    class: "text-sm font-medium text-gray-500 dark:text-gray-400",
  },
})
export class CardTextSubTitle {}
