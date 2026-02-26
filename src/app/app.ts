import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableComponent } from "./components/table-component/table-component";

@Component({
  selector: "app-root",
  imports: [FormsModule, TableComponent],
  templateUrl: "./app.html",
})
export class App {}
