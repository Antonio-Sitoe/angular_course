import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { IUserPostCommentsList } from "../interface/user.post.comments.interface";

@Injectable({
  providedIn: "root",
})
export class CommentsListService {
  private readonly _httpClient = inject(HttpClient);

  getComments(postId: number): Observable<IUserPostCommentsList> {
    return this._httpClient.get<IUserPostCommentsList>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }
}
