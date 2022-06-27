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
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    }
    setTodos([...todos, newTodo])
  }

  const editTodo = (id: number, title: string, description: string) => {
    const newTasksUpdate = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title,
          description: description
        }
      }
      return todo;
    });
    setTodos(newTasksUpdate);
  }


  const deleteTodo = (id: number) => {
    let updatedTodos = [...todos].filter((todo) =>
      todo.id !== id);
    setTodos(updatedTodos)
  }

  const completeTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true
        setTodos([...todos])
      }
    })
  }




  return (
    <TodoContext.Provider value={{ todos, saveTodo, editTodo, completeTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;