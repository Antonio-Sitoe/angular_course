import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  effect,
} from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { UserPostService } from "../../services/post.list.service";
import { CommonModule } from "@angular/common";
import { IUserPostList } from "../../interface/user.post.interface";

@Component({
  selector: "app-user-post",
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./user-post.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPost implements OnInit {
  readonly posts = signal<IUserPostList>([]);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);
  readonly hasSelectedPost = signal(false);

  private _postListService = inject(UserPostService);
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      const hasChild =
        this.activatedRoute.firstChild?.snapshot.paramMap.has("postId");
      this.hasSelectedPost.set(!!hasChild);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this._postListService.getUserPosts(Number(id)).subscribe({
        next: (posts) => {
          this.posts.set(posts);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error("Error fetching posts:", err);
          this.error.set("Erro ao carregar posts");
          this.isLoading.set(false);
        },
      });
    });

    this.activatedRoute.children.forEach((child) => {
      child.params.subscribe(() => {
        const hasPostId = child.snapshot.paramMap.has("postId");
        this.hasSelectedPost.set(hasPostId);
      });
    });
  }

  getTruncatedBody(body: string): string {
    return body.length > 150 ? body.substring(0, 150) + "..." : body;
  }
}
