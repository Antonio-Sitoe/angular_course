import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usersListMockedCountryList } from './lista-de-usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers(): Observable<any[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(usersListMockedCountryList);
        observer.complete();
      }, 500);
    });
  }
}
