import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserPostService } from "../../services/post.list.service";
import { CommonModule } from "@angular/common";
import { IUserPost } from "../../interface/user.post.interface";

@Component({
  selector: "app-post-details",
  imports: [CommonModule],
  templateUrl: "./post-details.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetails implements OnInit {
  readonly post = signal<IUserPost | null>(null);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly postService = inject(UserPostService);

  ngOnInit(): void {
    this.loadPost();
  }

  private loadPost(): void {
    const userId = this.route.parent?.parent?.snapshot.paramMap.get("id");
    const postId = this.route.snapshot.paramMap.get("postId");

    if (!userId || !postId) {
      this.error.set("Parâmetros inválidos");
      this.isLoading.set(false);
      return;
    }

    this.postService.getUserPosts(Number(userId)).subscribe({
      next: (posts) => {
        const foundPost = posts.find((p) => p.id === parseInt(postId));
        if (foundPost) {
          this.post.set(foundPost);
        } else {
          this.error.set("Post não encontrado");
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Error fetching posts:", err);
        this.error.set("Erro ao carregar post");
        this.isLoading.set(false);
      },
    });
  }

  goBack(): void {
    this.router.navigate([".."], { relativeTo: this.route });
  }
}
