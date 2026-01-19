import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dasIfEmpty' })
export class EmptyFieldPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (value === null || value === undefined || value.trim() === '') {
      return '-';
    }
    return value;
  }
}
