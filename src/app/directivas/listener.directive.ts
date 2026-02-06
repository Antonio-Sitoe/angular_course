import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appListener]",
})
export class ListenerDirective {
  @HostListener("click", ["$event"]) onClick($event: Event) {
    console.log("Element clicked:", $event);
  }

  @HostListener("keyup", ["$event"]) onKeyUp($event: KeyboardEvent) {
    console.log("Key up event:", ($event.target as HTMLInputElement).value);
  }
}
