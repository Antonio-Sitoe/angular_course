import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface SaldoItem {
  label: string;
  valor: number;
}

@Component({
  selector: "app-saldos-card",
  imports: [CommonModule],
  templateUrl: "./saldos-card.html",
  styleUrl: "./saldos-card.css",
})
export class SaldosCard {
  saldosDisponiveis: number = 100;

  saldos: SaldoItem[] = [
    { label: "Conta Corrente", valor: 200 },
    { label: "Conta Corrente Saldo Vinculados", valor: 300 },
    { label: "Conta Poupança Saldo Vinculados", valor: 400 },
    { label: "Investimentos com Baixa Automática", valor: 500 },
    { label: "Investimentos sem Baixa Automática", valor: 500 },
  ];

  saldoTotal: number = 1000;
  livreParaMovimentacao: number = 1000;

  formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
