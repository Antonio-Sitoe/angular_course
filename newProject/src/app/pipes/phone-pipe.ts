import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    const INVALIDE_PHONE = !phone || phone.length < 10 || phone.length > 11;
    if (INVALIDE_PHONE) {
      return 'Telefone inválido';
    }

    const CELLPHONE = phone.length === 11;
    if (!CELLPHONE) {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.slice(7)}`;
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.slice(7)}`;
    }
  }
}
