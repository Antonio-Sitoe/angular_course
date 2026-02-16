import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Card } from "../card-root/card/card";
import { CardHeader } from "../card-root/card-header/card-header";
import { CardContent } from "../card-root/card-content/card-content";
import { CardFooter } from "../card-root/card-footer/card-footer";

interface LimiteItem {
  label: string;
  valor: number;
  destaque?: boolean;
}

@Component({
  selector: "app-cartao-credito-card",
  imports: [CommonModule, Card, CardHeader, CardContent, CardFooter],
  templateUrl: "./cartao-credito-card.html",
  styleUrl: "./cartao-credito-card.css",
})
export class CartaoCreditoCard {
  numeroCartao: string = "123456789101";
  nomeCliente: string = "FELIPE DA SILVA FREITAS";
  bandeira: string = "MASTER CARD";

  limites: LimiteItem[] = [
    { label: "Limite de Compra", valor: 1000 },
    { label: "Disponível", valor: 1200 },
    { label: "Limite de Saque", valor: 2000 },
    { label: "Disponível", valor: 1300 },
  ];

  limiteTotalUtilizado: number = 3000;

  formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
