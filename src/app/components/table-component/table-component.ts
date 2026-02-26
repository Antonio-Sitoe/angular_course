import { take } from "rxjs";
import { Component, OnInit, signal } from "@angular/core";
import { ColumnDef } from "@tanstack/angular-table";
import { OperationsService } from "../../services/operations.service";
import { IOperationResponse } from "../../interfaces/operation-response";
import { DataTableComponent } from "../data-table/data-table";

@Component({
  selector: "app-table-component",
  imports: [DataTableComponent],
  templateUrl: "./table-component.html",
})
export class TableComponent implements OnInit {
  operations = signal<IOperationResponse[]>([]);

  columns: ColumnDef<IOperationResponse, any>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Nome',
    },
    {
      accessorKey: 'value',
      header: 'Valor',
      cell: (info) => `R$ ${info.getValue<number>().toFixed(2)}`,
    },
    {
      accessorKey: 'date',
      header: 'Data',
      cell: (info) => new Date(info.getValue<string>()).toLocaleDateString('pt-BR'),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: (info) => info.getValue<number>() === 7 ? 'Concluído' : 'Pendente',
    },
    {
      accessorKey: 'risk',
      header: 'Risco',
    },
  ];

  constructor(private readonly _operationService: OperationsService) {}

  getOperations() {
    this._operationService
      .get_operations()
      .pipe(take(1))
      .subscribe((data) => {
        this.operations.set(data);
      });
  }

  ngOnInit() {
    this.getOperations();
  }
}
