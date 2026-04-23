import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from "@angular/core";
import { UserAlbunsListService } from "../../services/albuns.list.service";
import { ActivatedRoute } from "@angular/router";
import { IUserAlbunsList } from "../../interface/user.albuns.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-albuns",
  imports: [CommonModule],
  templateUrl: "./user-albuns.html",
  styleUrl: "./user-albuns.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAlbunsComponent implements OnInit {
  readonly albuns = signal<IUserAlbunsList>([]);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  private readonly _albunsListService = inject(UserAlbunsListService);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) =>
      this._albunsListService.getAlbuns(Number(id)).subscribe({
        next: (albuns) => {
          this.albuns.set(albuns);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error("Error fetching albuns:", err);
          this.error.set("Erro ao carregar álbuns");
          this.isLoading.set(false);
        },
      })
    );
  }
}
