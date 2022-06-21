import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const [todoEditing, setTodoEditing] = React.useState(null);
  const { todos, completeTodo, editTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} completeTodo={completeTodo} editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todos;