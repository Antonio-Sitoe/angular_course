import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[appStyle]",
})
export class StyleDirective {
  @HostBinding("attr.style") style: string =
    "opacity: 0.5; pointer-events: none; background-color: lightgray;";
}
