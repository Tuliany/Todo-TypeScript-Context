import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, completeTodo, editTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} completeTodo={completeTodo} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </>
  );
};

export default Todos;