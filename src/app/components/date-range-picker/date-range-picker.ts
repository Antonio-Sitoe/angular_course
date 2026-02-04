import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  imports: [CommonModule, FormsModule],
  templateUrl: './date-range-picker.html',
  styleUrl: './date-range-picker.css',
})
export class DateRangePicker {
  @Input() label: string = '';
  @Input() placeholder: string = 'MM/DD/YYYY – MM/DD/YYYY';
  
  @Input() 
  set startDate(value: string | Date | undefined) {
    if (value) {
      this.startDateValue.set(this.formatDateForInput(value));
    } else {
      this.startDateValue.set('');
    }
  }
  get startDate(): Date | undefined {
    const value = this.startDateValue();
    if (!value) return undefined;
    return new Date(value);
  }
  
  @Input() 
  set endDate(value: string | Date | undefined) {
    if (value) {
      this.endDateValue.set(this.formatDateForInput(value));
    } else {
      this.endDateValue.set('');
    }
  }
  get endDate(): Date | undefined {
    const value = this.endDateValue();
    if (!value) return undefined;
    return new Date(value);
  }

  @Output() startDateChange = new EventEmitter<Date | undefined>();
  @Output() endDateChange = new EventEmitter<Date | undefined>();

  startDateValue = signal<string>('');
  endDateValue = signal<string>('');
  isOpen = signal<boolean>(false);
  showCalendar = signal<boolean>(false);

  onStartDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.startDateValue.set(target.value);
    const date = target.value ? new Date(target.value) : undefined;
    this.startDateChange.emit(date);
  }

  onEndDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.endDateValue.set(target.value);
    const date = target.value ? new Date(target.value) : undefined;
    this.endDateChange.emit(date);
  }

  toggleCalendar() {
    this.showCalendar.set(!this.showCalendar());
  }

  formatDateForInput(dateValue: string | Date): string {
    if (!dateValue) return '';
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  getDisplayValue(): string {
    const start = this.startDateValue();
    const end = this.endDateValue();
    
    if (!start && !end) {
      return this.placeholder;
    }
    
    if (start && end) {
      return `${this.formatDisplayDate(start)} – ${this.formatDisplayDate(end)}`;
    }
    
    if (start) {
      return `${this.formatDisplayDate(start)} – `;
    }
    
    return `– ${this.formatDisplayDate(end || '')}`;
  }

  formatDisplayDate(dateString: string): string {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
  }
}
