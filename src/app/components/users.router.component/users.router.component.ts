import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-users.router.component",
  imports: [],
  templateUrl: "./users.router.component.html",
  styleUrl: "./users.router.component.css",
})
export class UsersRouterComponent implements OnInit {
  private router = inject(ActivatedRoute);
  userList$: Observable<any[]> = new Observable((observer) => {
    observer.next([
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" },
    ]);
    observer.complete();
  });

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log("User ID:", params["id"]);
    });
  }
}
