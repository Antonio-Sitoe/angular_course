import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserAlbunsList } from "../interface/user.albuns.interface";

@Injectable({
  providedIn: "root",
})
export class UserAlbunsListService {
  private readonly _httpClient = inject(HttpClient);

  getAlbuns(userId: number): Observable<IUserAlbunsList> {
    return this._httpClient.get<IUserAlbunsList>(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
  }
}
