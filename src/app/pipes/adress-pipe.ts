import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({ name: 'adress' })
export class AdressPipe implements PipeTransform {
  transform(adress: IAddress): string {
    if (!adress) return '';
    const hasAllData = adress.rua && adress.numero && adress.cidade && adress.estado && adress.pais;
    if (!hasAllData) return 'Dados incompletos';
    return `${adress.rua}, ${adress.numero}, ${adress.cidade}, ${adress.estado}, ${adress.pais}`;
  }
}
