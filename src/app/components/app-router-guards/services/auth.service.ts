import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { API_URL } from "./api";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient);

  constructor() {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this._httpClient
      .post<{ token: string }>(`${API_URL}/login`, { username, password })
      .pipe(
        map((response) => {
          localStorage.setItem("access-token", response.token);
          return response;
        })
      );
  }

  verifyToken(): Observable<{ valid: boolean; user: string }> {
    const token = localStorage.getItem("access-token");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this._httpClient
      .get<{ valid: boolean; user: string }>(`${API_URL}/verify-token`, {
        headers,
      })
      .pipe(map((response) => response));
  }

  getUserScopes(): string[] {
    const token = localStorage.getItem("access-token");
    if (!token) {
      return [];
    }
    const decode: any = jwtDecode(token!);
    return decode.scopes || [];
  }

  getUserWalletStatus(): string {
    const token = localStorage.getItem("access-token");
    if (!token) {
      return "";
    }
    const decode: any = jwtDecode(token!);
    return decode.walletStatus || "inactive";
  }
}
