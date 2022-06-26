import * as React from 'react';
import { ITodo } from '../@types/todo';
import EditTodo from './EditTodo';


type Props = {
  todo: ITodo;
  completeTodo: (id: number) => void;
  editTodo: (id: number, title: string, description: string) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, completeTodo, editTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : '';
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className="Card">
        <div className="Card--text">
          <h1 className={checkTodo}>{todo.title}</h1>
          <span className={checkTodo}>{todo.description}</span>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className='Card-delete-button'>
          Delete
        </button>
        <button onClick={() => setOpen(true)} className={todo.status ? `hide-button` : 'Card-edit-button'}>
          Edit
        </button>
        <button onClick={() => completeTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
          Complete
        </button>
      </div>
      <div className='Card'>
        {open && (
          <EditTodo handleChange={() => editTodo(todo.id, todo.title, todo.description)} id={todo.id} title={todo.title} description={todo.description} />
        )}
      </div>
    </div>
  );
};
export default Todo;
