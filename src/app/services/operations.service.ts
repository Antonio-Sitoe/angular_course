import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IOperationResponse } from "../interfaces/operation-response";
import { OperationsListResponseMock } from "../utils/operations-list-response-mock";

@Injectable({
  providedIn: "root",
})
export class OperationsService {
  get_operations(): Observable<IOperationResponse[]> {
    return of(OperationsListResponseMock);
  }
}
