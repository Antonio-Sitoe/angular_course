import { Directive } from "@angular/core";

@Directive({
  selector: "app-card-avatar",
  host: {
    class: "w-10 h-10 rounded-full",
  },
})
export class CardAvatar {}
