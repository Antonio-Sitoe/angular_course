import { NumberInput } from "@angular/cdk/coercion";
import {
  Component,
  input,
  numberAttribute,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  NgpProgress,
  NgpProgressIndicator,
  NgpProgressTrack,
  NgpProgressValue,
} from "ng-primitives/progress";

@Component({
  selector: "app-progress",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

  hostDirectives: [
    {
      directive: NgpProgress,
      inputs: [
        "ngpProgressValue:value",
        "ngpProgressMax:max",
        "ngpProgressValueLabel:valueLabel",
      ],
    },
  ],

  imports: [NgpProgressIndicator, NgpProgressTrack, NgpProgressValue],

  template: `
    <span ngpProgressValue>{{ value() }}%</span>

    <div ngpProgressTrack>
      <div ngpProgressIndicator></div>
    </div>
  `,

  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 0.5rem;
        width: 200px;
        box-sizing: border-box;
        padding: 0.5rem;
      }

      [ngpProgressValue] {
        color: var(--ngp-text-secondary);
        font-size: 14px;
        font-weight: 500;
        text-align: end;
        grid-column-start: 2;
      }

      [ngpProgressTrack] {
        grid-column: 1 / 3;
        position: relative;
        height: 12px;
        width: 100%;
        max-width: 320px;
        overflow: hidden;
        border-radius: 0.5rem;
        border: 1px solid var(--ngp-border);
        background-color: var(--ngp-background);
      }

      [ngpProgressIndicator] {
        height: 100%;
        width: var(--ngp-progress-percent);
        border-radius: 0.5rem;
        background-color: var(--ngp-background-inverse);
        transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    `,
  ],
})
export class ProgressComponent {
  readonly value = input<number, NumberInput>(0, {
    transform: numberAttribute,
  });
}
