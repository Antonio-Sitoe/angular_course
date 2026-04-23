import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../interface/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserListService {
  private readonly _httpClient = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this._httpClient.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  }

  getUserById(userId: number): Observable<IUser> {
    return this._httpClient.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
