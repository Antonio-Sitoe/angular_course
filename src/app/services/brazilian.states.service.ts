import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IStateListResponse } from "../interfaces/state.interface";

@Injectable({ providedIn: "root" })
export class BrazilianStatesService {
  private readonly states: IStateListResponse = [
    { id: 1, description: "Acre", abbreviation: "AC" },
    { id: 2, description: "Alagoas", abbreviation: "AL" },
    { id: 3, description: "Amapá", abbreviation: "AP" },
    { id: 4, description: "Amazonas", abbreviation: "AM" },
    { id: 5, description: "Bahia", abbreviation: "BA" },
    { id: 6, description: "Ceará", abbreviation: "CE" },
    { id: 7, description: "Distrito Federal", abbreviation: "DF" },
    { id: 8, description: "Espírito Santo", abbreviation: "ES" },
    { id: 9, description: "Goiás", abbreviation: "GO" },
    { id: 10, description: "Maranhão", abbreviation: "MA" },
    { id: 11, description: "Mato Grosso", abbreviation: "MT" },
    { id: 12, description: "Mato Grosso do Sul", abbreviation: "MS" },
  ];
  // get States
  getStates(): Observable<IStateListResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.states);
        observer.complete();
      }, 3500);
    });
  }
}
