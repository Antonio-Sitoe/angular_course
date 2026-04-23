import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IUserPostList } from "../interface/user.post.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserPostService {
  private readonly _httpClient = inject(HttpClient);

  getUserPosts(userId: number): Observable<IUserPostList> {
    return this._httpClient.get<IUserPostList>(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  }

  getPostById(postId: number): Observable<IUserPostList> {
    return this._httpClient.get<IUserPostList>(
      `https://jsonplaceholder.typicode.com/posts?id=${postId}`
    );
  }
}
