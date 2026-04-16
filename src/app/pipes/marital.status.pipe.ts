import { Pipe, PipeTransform } from "@angular/core";
import { MARITAL_STATUS_DESCRIPTION_MAP } from "../utils/marital-status-description-map";

@Pipe({ name: "maritalStatus" })
export class MaritalStatusPipe implements PipeTransform {
  transform(value: number): string {
    return MARITAL_STATUS_DESCRIPTION_MAP[value] || "Desconhecido";
  }
}
