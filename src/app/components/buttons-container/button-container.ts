import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-buttons-container",
  templateUrl: "./button-container.html",
})
export class ButtonContainerComponent {
  @Input({ required: true }) isInEditMode: boolean = false;
  @Output("editButtonEmitted") onEditButtonEmitted = new EventEmitter<void>();
  @Output("cancelButtonEmitted") onCancelButtonEmitted =
    new EventEmitter<void>();
  @Output("saveButtonEmitted") onSaveButtonEmitted = new EventEmitter<void>();

  emitEditButton() {
    this.onEditButtonEmitted.emit();
  }
  emitCancelButton() {
    this.onCancelButtonEmitted.emit();
  }
  emitSaveButton() {
    this.onSaveButtonEmitted.emit();
  }
}
