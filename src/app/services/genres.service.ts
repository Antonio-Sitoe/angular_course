import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGenreResponse } from "../interfaces/genre.interface";

@Injectable({ providedIn: "root" })
export class GenresService {
  private readonly genres: IGenreResponse = [
    { id: 1, description: "Rock" },
    { id: 2, description: "Pop" },
    { id: 3, description: "Jazz" },
    { id: 4, description: "Classical" },
    { id: 5, description: "Hip-Hop" },
    { id: 6, description: "Electronic" },
    { id: 7, description: "Country" },
  ];

  getGenres(): Observable<any[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.genres);
        observer.complete();
      }, 500);
    });
  }
}
