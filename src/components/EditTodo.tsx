import * as React from 'react';

type Props = {
  id: number;
  title: string;
  description: string;
  handleChange: (e: any) => void;
};

const EditTodo: React.FC<Props> = ({ id, title, description, handleChange }) => {
  return (
    <div>
      <form className="Form">
        <div >
          <>
            <div>
              <label key={id} htmlFor="name">Title</label>
              <input  type="text" id="title" placeholder={title} />
            </div><div>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" placeholder={description} />
            </div>
          </>
        </div>
        <button onClick={handleChange} >Update Todo</button>
      </form>
    </div>
  )
}

export default EditTodo