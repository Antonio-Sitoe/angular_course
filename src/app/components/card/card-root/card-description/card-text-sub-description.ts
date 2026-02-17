import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "app-card-text-sub-description",
  host: {
    class: "text-sm text-gray-500 dark:text-gray-400",
  },
})
export class CardTextSubDescription {
  @Input()
  @HostBinding("style.color")
  color: string = "";
}
