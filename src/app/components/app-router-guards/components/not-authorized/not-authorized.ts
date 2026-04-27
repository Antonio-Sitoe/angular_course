import { AsyncPipe } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-not-authorized",
  imports: [AsyncPipe, RouterLink],
  templateUrl: "./not-authorized.html",
  styleUrl: "./not-authorized.css",
})
export class NotAuthorized implements OnInit {
  $data: Observable<any> = of();
  private readonly _activedtedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.$data = this._activedtedRoute.data;
  }
}
