export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type ITodosList = ITodos[];
