import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryUserService {
  getUsers(): Observable<any[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(usersListMockedCountryList);
        observer.complete();
      }, 5000);
    });
  }
}
