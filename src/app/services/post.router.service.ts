import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostServiceRouter {
  constructor(private http: HttpClient) {}

  getUserPosts(userId: string): Observable<IPOSTARRAY[]> {
    return this.http.get<IPOSTARRAY[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  }
}
