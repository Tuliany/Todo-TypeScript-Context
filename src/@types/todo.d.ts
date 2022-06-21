export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  completeTodo: (id: number) => void;
  editTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
};