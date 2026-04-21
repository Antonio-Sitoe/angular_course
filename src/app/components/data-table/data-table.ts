import { Component, computed, input, Signal, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  createAngularTable,
  FlexRenderDirective,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  SortingState,
  PaginationState,
} from "@tanstack/angular-table";

@Component({
  selector: "app-data-table",
  standalone: true,
  imports: [CommonModule, FlexRenderDirective],
  templateUrl: "./data-table.html",
  styleUrl: "./data-table.css",
})
export class DataTableComponent<T> {
  // Make Math available in template
  Math = Math;

  // Inputs
  data = input.required<T[]>();
  columns = input.required<ColumnDef<T, any>[]>();
  enableSorting = input<boolean>(true);
  enablePagination = input<boolean>(true);
  enableFiltering = input<boolean>(true);
  pageSize = input<number>(10);

  // State signals
  sorting: Signal<SortingState> = computed(() => []);
  globalFilter = "";

  // Create table instance
  table = createAngularTable(() => ({
    data: this.data(),
    columns: this.columns(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: this.enableSorting() ? getSortedRowModel() : undefined,
    getPaginationRowModel: this.enablePagination()
      ? getPaginationRowModel()
      : undefined,
    getFilteredRowModel: this.enableFiltering()
      ? getFilteredRowModel()
      : undefined,
    initialState: {
      pagination: {
        pageSize: this.pageSize(),
      },
    },
  }));

  // Filter handler
  onFilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.table.setGlobalFilter(value);
  }

  // Pagination helpers
  goToFirstPage() {
    this.table.setPageIndex(0);
  }

  goToPreviousPage() {
    this.table.previousPage();
  }

  goToNextPage() {
    this.table.nextPage();
  }

  goToLastPage() {
    this.table.setPageIndex(this.table.getPageCount() - 1);
  }

  // Sorting handler
  toggleSorting(column: any) {
    if (column.getCanSort()) {
      column.toggleSorting();
    }
  }

  // Get sort icon
  getSortIcon(column: any): string {
    const sorted = column.getIsSorted();
    if (sorted === "asc") return "↑";
    if (sorted === "desc") return "↓";
    return "↕";
  }
}
