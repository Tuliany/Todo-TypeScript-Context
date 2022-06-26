export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  editTodo: (id: number, title: string, description: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};