import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "status" })
export class StatusPipe implements PipeTransform {
  transform(status: unknown): string {
    const statusMap: { [key: number]: string } = {
      1: "Ativo",
      2: "Inativo",
    };
    return statusMap[status as number] || "Desconhecido";
  }
}
