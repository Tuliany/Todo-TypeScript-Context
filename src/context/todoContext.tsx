import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
      description: todo.description,
      status: false,
    }
    setTodos([...todos, newTodo])
  }

  const editTodo = (todo: ITodo) => {
    let updatedTodos: ITodo = {
      title: todo.title,
      description: todo.description,
      status: false,
      id: 0
    }
    setTodos([...todos, updatedTodos])
  }

  const completeTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true
        setTodos([...todos])
      }
    })
  }

  const deleteTodo = (id: number) => {
    let updatedTodos = [...todos].filter((todo) => 
    todo.id !== id);
    setTodos(updatedTodos)
  }

return (
  <TodoContext.Provider value={{ todos, saveTodo, completeTodo, editTodo, deleteTodo }}>
    {children}
  </TodoContext.Provider>
);
};

export default TodoProvider;