import * as React from 'react';
import { ITodo } from '../@types/todo';

type Props = {
  todo: ITodo;
  completeTodo: (id: number) => void;
  editTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, completeTodo, editTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : '';
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
        Delete
      </button>
      <button onClick={() => editTodo(todo)} className={todo.status ? `hide-button` : 'Card--button'}>
        Edit
      </button>
      <button onClick={() => completeTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
        Complete
      </button>
    </div>
  );
};
export default Todo;
