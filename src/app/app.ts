import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Filho } from "./components/filho/filho";
import { HighlightDirective } from "./directivas/hightligth";
import { DisableDirective } from "./directivas/disable.directive";
import { StyleDirective } from "./directivas/style.directive";
import { ListenerDirective } from "./directivas/listener.directive";
import { SaldosCard } from "./components/card/saldos-card/saldos-card";
import { CartaoCreditoCard } from "./components/card/cartao-credito-card/cartao-credito-card";
import { ClienteInfoCard } from "./components/card/cliente-info-card/cliente-info-card";

@Component({
  selector: "app-root",
  imports: [
    FormsModule,
    FormsModule,
    Filho,
    HighlightDirective,
    DisableDirective,
    ListenerDirective,
    StyleDirective,
    SaldosCard,
    CartaoCreditoCard,
    ClienteInfoCard,
  ],
  templateUrl: "./app.html",
})
export class App {
  @ViewChild("meuInput") meuInputEl: ElementRef<HTMLInputElement> | null = null;

  @ViewChild("filhoCompo") filhoCompo: Filho | null = null;
}
