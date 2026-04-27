import { Component, inject } from "@angular/core";
import { Debit } from "../debit/debit";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-payments",
  imports: [Debit, RouterOutlet],
  templateUrl: "./payments.html",
  styleUrl: "./payments.css",
})
export class Payments {
  isWalletBlocked = false;
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  navigate(path: string) {
    this._router
      .navigate([path], {
        relativeTo: this._activatedRoute,
      })
      .then((sucess) => {
        if (!sucess) {
          this.isWalletBlocked = false;
          console.error("Navigation failed");
        } else {
          this.isWalletBlocked = true;
        }
      });
  }
}
