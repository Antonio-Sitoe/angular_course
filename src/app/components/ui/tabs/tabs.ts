import { NgTemplateOutlet } from "@angular/common";
import { Component, contentChildren, model } from "@angular/core";
import {
  NgpTabButton,
  NgpTabList,
  NgpTabPanel,
  NgpTabset,
} from "ng-primitives/tabs";
import { Tab } from "./tab";

@Component({
  selector: "app-tabs",
  imports: [NgpTabset, NgpTabButton, NgpTabList, NgpTabPanel, NgTemplateOutlet],
  template: `
    <div [(ngpTabsetValue)]="value" ngpTabset data-slot="tabs">
      <div ngpTabList data-slot="tabs-list">
        @for (tab of tabs(); track tab.label()) {
          <button [ngpTabButtonValue]="tab.value()" ngpTabButton data-slot="tabs-trigger">
            {{ tab.label() }}
          </button>
        }
      </div>

      @for (tab of tabs(); track tab.label()) {
        <div [ngpTabPanelValue]="tab.value()" ngpTabPanel data-slot="tabs-content">
          <ng-container [ngTemplateOutlet]="tab.content()" />
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    [ngpTabset] {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 0.875rem;
      border: 1px solid var(--ngp-border, #e2e8f0);
      background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
      padding: 0.625rem;
      box-shadow:
        0 1px 2px rgb(15 23 42 / 0.06),
        0 12px 24px rgb(15 23 42 / 0.04);
    }

    [ngpTabList] {
      display: flex;
      width: 100%;
      gap: 0.25rem;
      padding: 0.1875rem;
      border-radius: 0.625rem;
      background-color: #f1f5f9;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    [ngpTabButton] {
      position: relative;
      flex: 1 1 0;
      min-width: max-content;
      border: 1px solid transparent;
      border-radius: 0.5rem;
      background-color: transparent;
      color: var(--ngp-text-secondary, #64748b);
      padding: 0.375rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
      white-space: nowrap;
      outline: none;
      cursor: pointer;
      transition:
        color 150ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
        border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    [ngpTabButton]:hover {
      color: var(--ngp-text-primary, #0f172a);
    }

    [ngpTabButton][data-focus-visible] {
      border-color: var(--ngp-focus-ring, #2563eb);
      box-shadow: 0 0 0 3px rgb(37 99 235 / 0.3);
    }

    [ngpTabButton][data-active] {
      border-color: var(--ngp-border, #e2e8f0);
      background-color: var(--ngp-background, #ffffff);
      color: var(--ngp-text-primary, #0f172a);
      box-shadow:
        0 1px 2px rgb(15 23 42 / 0.12),
        inset 0 1px 0 rgb(255 255 255 / 0.8);
    }

    [ngpTabButton]:disabled,
    [ngpTabButton][aria-disabled="true"] {
      pointer-events: none;
      opacity: 0.5;
    }

    [ngpTabPanel] {
      border: 1px solid var(--ngp-border, #e2e8f0);
      border-radius: 0.75rem;
      background-color: var(--ngp-background, #ffffff);
      color: var(--ngp-text-primary, #0f172a);
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.5;
      outline: none;
      animation: tabs-content-in 160ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    [ngpTabPanel]:not([data-active]) {
      display: none;
    }

    @media (max-width: 640px) {
      [ngpTabset] {
        padding: 0.5rem;
      }

      [ngpTabButton] {
        padding: 0.35rem 0.625rem;
      }

      [ngpTabPanel] {
        padding: 0.875rem;
      }
    }

    @keyframes tabs-content-in {
      from {
        opacity: 0;
        transform: translateY(2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
})
export class Tabs {
  /**
   * The value of the selected tab.
   */
  readonly value = model<string>();

  /**
   * The tabs in the group.
   */
  readonly tabs = contentChildren(Tab);
}
