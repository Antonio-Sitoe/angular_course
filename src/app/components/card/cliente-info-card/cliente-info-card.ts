import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Card } from "../card-root/card/card";
import { CardHeader } from "../card-root/card-header/card-header";
import { CardContent } from "../card-root/card-content/card-content";

interface InfoItem {
  label: string;
  valor: string;
}

@Component({
  selector: "app-cliente-info-card",
  imports: [CommonModule, Card, CardHeader, CardContent],
  templateUrl: "./cliente-info-card.html",
  styleUrl: "./cliente-info-card.css",
})
export class ClienteInfoCard {
  informacoes: InfoItem[] = [
    { label: "Nome", valor: "Felipe da Silva Freitas" },
    { label: "Idade", valor: "26 anos" },
    { label: "Renda Mensal", valor: "R$ -1000,00" },
    { label: "Nacionalidade", valor: "Brasileiro" },
  ];
}
