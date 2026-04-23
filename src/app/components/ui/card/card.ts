import { Component, EventEmitter, input, Output } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <div class="card-title-wrapper">
          <h3 class="card-title">{{ title() }}</h3>
          <p class="card-description">{{ description() }}</p>
        </div>
      </div>

      <div class="card-content">
        <ng-content />
      </div>

      @if (action()) {
        <div class="card-footer">
          <button class="card-action-button" type="button" (click)="onActionClick()">
            {{ action() }}
          </button>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .card {
      border: 1px solid var(--ngp-border, #e2e8f0);
      border-radius: 0.75rem;
      background-color: var(--ngp-background, #ffffff);
      overflow: hidden;
      box-shadow:
        0 1px 2px rgb(15 23 42 / 0.06),
        0 12px 24px rgb(15 23 42 / 0.04);
      transition:
        box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1),
        border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
      box-shadow:
        0 4px 6px rgb(15 23 42 / 0.1),
        0 20px 25px rgb(15 23 42 / 0.08);
      border-color: var(--ngp-border, #cbd5e1);
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid var(--ngp-border, #e2e8f0);
      gap: 1rem;
    }

    .card-title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .card-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.5;
      color: var(--ngp-text-primary, #0f172a);
      letter-spacing: -0.5px;
    }

    .card-description {
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--ngp-text-secondary, #64748b);
    }

    .card-content {
      padding: 1.5rem;
      color: var(--ngp-text-primary, #0f172a);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--ngp-border, #e2e8f0);
      background-color: #f8fafc;
      gap: 0.5rem;
    }

    .card-action-button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--ngp-border, #e2e8f0);
      border-radius: 0.5rem;
      background-color: var(--ngp-background, #ffffff);
      color: var(--ngp-text-primary, #0f172a);
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
      cursor: pointer;
      outline: none;
      transition:
        color 150ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
        border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card-action-button:hover {
      border-color: var(--ngp-border, #cbd5e1);
      background-color: #f1f5f9;
      color: var(--ngp-text-primary, #0f172a);
    }

    .card-action-button:focus-visible {
      border-color: var(--ngp-focus-ring, #2563eb);
      box-shadow: 0 0 0 3px rgb(37 99 235 / 0.3);
    }

    .card-action-button:active {
      background-color: #e2e8f0;
    }

    @media (max-width: 640px) {
      .card-header {
        padding: 1rem;
      }

      .card-title {
        font-size: 1rem;
      }

      .card-content {
        padding: 1rem;
      }

      .card-footer {
        padding: 0.875rem 1rem;
      }

      .card-action-button {
        padding: 0.4375rem 0.875rem;
        font-size: 0.8125rem;
      }
    }
  `,
})
export class CardComponent {
  /**
   * O título do card.
   */
  readonly title = input<string>("");

  /**
   * A descrição do card.
   */
  readonly description = input<string>("");

  /**
   * Texto do botão de ação (se vazio, não exibe).
   */
  readonly action = input<string>("");
  @Output() actionClick = new EventEmitter<void>();

  onActionClick(): void {
    this.actionClick.emit();
  }
}
