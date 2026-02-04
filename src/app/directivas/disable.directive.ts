import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDisable]",
})
export class DisableDirective {
  @HostBinding("attr.disabled") isDisabled: boolean = false;
}
