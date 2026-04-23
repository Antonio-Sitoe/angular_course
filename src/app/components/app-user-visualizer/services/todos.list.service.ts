import { HttpClient } from "@angular/common/http";
import { ITodosList } from "../interface/user.todos.interface";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodosListService {
  private readonly _httpClient = inject(HttpClient);

  getTodos(userId: number): Observable<ITodosList> {
    return this._httpClient.get<ITodosList>(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
  }
}
