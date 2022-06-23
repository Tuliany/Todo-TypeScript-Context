import * as React from 'react';
import { ITodo } from '../@types/todo';
import EditTodo from './EditTodo';


type Props = {
  todo: ITodo;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, completeTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : '';
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className="Card">
        <div className="Card--text">
          <h1 className={checkTodo}>{todo.title}</h1>
          <span className={checkTodo}>{todo.description}</span>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
          Delete
        </button>
        <button onClick={() => setOpen(true)} className={todo.status ? `hide-button` : 'Card--button'}>
          Edit
        </button>
        <button onClick={() => completeTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
          Complete
        </button>
      </div>
      <div className='Card'>
        {open && (
          <EditTodo todo={todo} />
        )}
      </div>
    </div>
  );
};
export default Todo;
