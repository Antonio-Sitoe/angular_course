import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {
  transform(status: unknown): string {
    switch (status) {
      case 1:
        return 'Ativo';
      case 2:
        return 'Inativo';
      default:
        return 'Desconhecido';
    }
  }
}
