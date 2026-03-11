import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  getUsers(): Observable<any[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next([
          {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            username: "johndoe",
            password: "password123",
            birthDate: "03/15/1990",
            state: 34,
            musics: [
              {
                id: 1,
                title: "Song A",
                band: "Artist A",
                genre: 2,
                isFavorite: true,
              },
              {
                id: 2,
                title: "Song B",
                band: "Artist B",
                genre: 1,
                isFavorite: false,
              },
            ],
          },
          {
            id: 2,
            name: "Jane Doe",
            email: "jane@example.com",
            username: "janedoe",
            password: "password456",
            birthDate: "05/20/1992",
            state: 35,
            musics: [
              {
                id: 3,
                title: "Song C",
                band: "Artist C",
                genre: 3,
                isFavorite: true,
              },
              {
                id: 4,
                title: "Song D",
                band: "Artist D",
                genre: 2,
                isFavorite: false,
              },
            ],
          },
          {
            id: 3,
            name: "Bob Smith",
            email: "bob@gmail.com",
            username: "bobsmith",
            password: "password789",
            birthDate: "08/10/1985",
            state: 36,
            musics: [
              {
                id: 5,
                title: "Song E",
                band: "Artist E",
                genre: 1,
                isFavorite: true,
              },
              {
                id: 6,
                title: "Song F",
                band: "Artist F",
                genre: 3,
                isFavorite: false,
              },
            ],
          },
        ]);
        observer.complete();
      }, 5000);
    });
  }
}
