import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-elememt-ref",
  templateUrl: "./elememt-ref.html",
})
export class ElememtRef implements OnInit, AfterViewInit {
  @ViewChild("minhaDiv") divEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly _ElRef: ElementRef) {}

  createElement() {}

  ngAfterViewInit() {
    this._ElRef.nativeElement.style.backgroundColor = "red";
    console.log(this.divEl);
  }

  ngOnInit() {
    console.log("ngOnInit", this._ElRef);
  }
}
