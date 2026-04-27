import { Component } from "@angular/core";
import { Debit } from "../debit/debit";

@Component({
  selector: "app-payments",
  imports: [Debit],
  templateUrl: "./payments.html",
  styleUrl: "./payments.css",
})
export class Payments {}
