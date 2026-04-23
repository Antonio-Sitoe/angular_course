import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodosListService } from "../../services/todos.list.service";
import { CommonModule } from "@angular/common";
import { ITodosList, ITodos } from "../../interface/user.todos.interface";
import { CardComponent } from "../../../../components/ui/card/card";

@Component({
  selector: "app-user-todos",
  imports: [CommonModule, CardComponent],
  templateUrl: "./user-todos.html",
  styleUrl: "./user-todos.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTodos implements OnInit {
  readonly todos = signal<ITodosList>([]);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  private readonly _todosListService = inject(TodosListService);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) =>
      this._todosListService.getTodos(Number(id)).subscribe({
        next: (todos) => {
          this.todos.set(todos);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error("Error fetching todos:", err);
          this.error.set("Erro ao carregar tarefas");
          this.isLoading.set(false);
        },
      })
    );
  }

  toggleTodo(todo: ITodos): void {
    const currentTodos = this.todos();
    const updated = currentTodos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    this.todos.set(updated);
  }

  getCompletedCount(): number {
    return this.todos().filter((t) => t.completed).length;
  }

  getTotalCount(): number {
    return this.todos().length;
  }
}
