import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  getUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            username: "johndoe",
          },
          {
            id: 2,
            name: "Jane Doe",
            email: "jane@example.com",
            username: "janedoe",
          },
        ]);
      }, 1000);
    });
  }
}
