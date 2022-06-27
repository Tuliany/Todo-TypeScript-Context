import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, completeTodo, editTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  const completedTask = todos.filter((todo) => (todo.status))
  const [renderize, setRenderize] = React.useState(todos);

  const handleFilter = (e) => {
    if (e.target.value === "All") {
      setRenderize(todos);
    }

    if (e.target.value === "Active") {
      setRenderize(
        [...todos].filter((todo) => {
          if (todo.status === false) {
            return todo;
          }
        })
      );
    }

    if (e.target.value === "Complete") {
      setRenderize(
        [...todos].filter((todo) => {
          if (todo.status === true) {
            return todo;
          }
        })
      );
    }
  };


  return (
    <>
      <div className="main">
        <div className="filters">
          <input type="radio" name="filter" value="All" defaultChecked onChange={handleFilter} />
          {' '}
          <label>All</label>
          {' '}
          <input type="radio" name="filter" value="Complete" onChange={handleFilter} />
          {' '}
          <label>Complete</label>
          {' '}
          <input type="radio" name="filter" value="Active" onChange={handleFilter} />
          {' '}
          <label>Active</label>
        </div>
        {renderize.map((todo: ITodo) => (
          <Todo key={todo.id} completeTodo={completeTodo} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}

        <div className="task-completed">
          <p>{completedTask.length} </p>
          {' '}
          /
          {' '}
          <p>
            {todos.length} completed
          </p>
        </div>
      </div>
    </>
  );
};

export default Todos;