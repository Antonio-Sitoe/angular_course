import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserPlaceHolderService {
  constructor(private readonly _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }
}
