import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateRangePicker } from '../date-range-picker/date-range-picker';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, CommonModule, DateRangePicker],
  templateUrl: './filter.html',
})
export class Filter {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
