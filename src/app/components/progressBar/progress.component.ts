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

  imports: [NgpProgressIndicator, NgpProgressTrack],

  template: `
    <div ngpProgressTrack>
      <div
        ngpProgressIndicator
        class="h-full bg-green-500 rounded-lg transition-all duration-150"
        style="width: 100%;"
      ></div>
    </div>
  `,

  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        width: 200px;
        padding: 0.5rem;
        box-sizing: border-box;
      }

      [ngpProgressValue] {
        color: var(--ngp-text-secondary);
        font-size: 14px;
        font-weight: 500;
        text-align: end;
        grid-column: 2;
      }

      [ngpProgressTrack] {
        grid-column: 1 / 3;
        position: relative;
        height: 12px;
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid oklch(51.8% 0.253 323.949);
        background-color: var(--ngp-background);
        overflow: hidden;
      }
    `,
  ],
})
export class ProgressComponent {
  readonly value = input<number, NumberInput>(0, {
    transform: numberAttribute,
  });

  readonly max = input<number, NumberInput>(100, {
    transform: numberAttribute,
  });

  readonly valueLabel = input<string>("", {});
}
