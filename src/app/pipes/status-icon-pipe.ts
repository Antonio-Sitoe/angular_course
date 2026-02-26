import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "statusIcon" })
export class StatusIconPipe implements PipeTransform {
  transform(value: unknown): string {
    const statusIconMap: { [key: number]: string } = {
      1: "✅", // Ativo
      2: "❌", // Inativo
    };
    return statusIconMap[value as number] || "❓";
  }
}
