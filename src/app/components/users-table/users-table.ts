import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ColumnDef } from "@tanstack/angular-table";
import { DataTableComponent } from "../data-table/data-table";
import { IUser } from "../../interfaces/user/user.interface";
import { UsersList } from "../../data/users-list";

@Component({
  selector: "app-users-table",
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: "./users-table.html",
  styleUrl: "./users-table.css",
})
export class UsersTableComponent {
  // Data source
  users: IUser[] = UsersList;

  // Column definitions
  columns: ColumnDef<IUser, any>[] = [
    {
      accessorKey: "nome",
      header: "Nome",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "funcao",
      header: "Função",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "idade",
      header: "Idade",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "ativo",
      header: "Status",
      cell: (info) => (info.getValue() ? "✅ Ativo" : "❌ Inativo"),
    },
    {
      accessorFn: (row) => row.endereco.cidade,
      id: "cidade",
      header: "Cidade",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "dataCadastro",
      header: "Data Cadastro",
      cell: (info) => {
        const date = new Date(info.getValue() as string);
        return date.toLocaleDateString("pt-BR");
      },
    },
  ];
}
