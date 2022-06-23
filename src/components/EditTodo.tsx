import * as React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../@types/todo';

type Props = {
  todo: ITodo;
};

const EditTodo: React.FC<Props> = ({ todo }) => {
  const { editTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>([]);

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleEditTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    editTodo(formData)
  }


  return (
    <div>
      <form className="Form" onSubmit={(e) => handleEditTodo(e, formData)}>
        <div>
          <>
            <div>
              <label htmlFor="name">Title</label>
              <input onChange={handleForm} type="text" id="title" placeholder={todo.title} />
            </div><div>
              <label htmlFor="description">Description</label>
              <input onChange={handleForm} type="text" id="description" placeholder={todo.description} />
            </div>
          </>
        </div>
        <button disabled={formData === undefined ? true : false}>Update Todo</button>
      </form>
    </div>
  )
}

export default EditTodo