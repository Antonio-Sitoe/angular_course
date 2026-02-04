import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  @HostListener("mouseover")
  onMouseOver() {
    this.backgroundColor = "yellow";
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.backgroundColor = "transparent";
  }
}
