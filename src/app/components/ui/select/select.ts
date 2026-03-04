/** This example uses ng-primitives styles, which are imported from ng-primitives/example-theme/index.css in the global styles file **/
import { Component, signal } from "@angular/core";
import {
  NgpDescription,
  NgpFormField,
  NgpLabel,
} from "ng-primitives/form-field";
import {
  NgpSelect,
  NgpSelectDropdown,
  NgpSelectOption,
  NgpSelectPortal,
} from "ng-primitives/select";

@Component({
  selector: "app-select-form-field-tailwind",
  standalone: true,
  imports: [
    NgpSelect,
    NgpSelectDropdown,
    NgpSelectOption,
    NgpSelectPortal,
    NgpFormField,
    NgpLabel,
    NgpDescription,
  ],
  providers: [],
  template: "./select.html",
  styles: `
    [ngpSelectDropdown][data-enter] {
      animation: select-show 0.1s ease-out;
    }

    [ngpSelectDropdown][data-exit] {
      animation: select-hide 0.1s ease-out;
    }

    @keyframes select-show {
      from {
        opacity: 0;
        transform: translateY(-10px) scale(0.9);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes select-hide {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(-10px) scale(0.9);
      }
    }
  `,
})
export default class SelectFormFieldTailwindExample {
  /**
   * The options for the select.
   */
  readonly options: string[] = [
    "Marty McFly",
    "Doc Brown",
    "Biff Tannen",
    "George McFly",
    "Jennifer Parker",
    "Emmett Brown",
    "Einstein",
    "Clara Clayton",
    "Needles",
    "Goldie Wilson",
    "Marvin Berry",
    "Lorraine Baines",
    "Strickland",
  ];

  /**
   * The selected value.
   */
  readonly value = signal<string | undefined>(undefined);
}
