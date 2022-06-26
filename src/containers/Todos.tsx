import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';
import { Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react'

const Todos = () => {
  const { todos, completeTodo, editTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  const completedTask = todos.filter((todo) => (todo.status))
  const [renderize, setRenderize] = React.useState(todos);

  const filterCompleted = () => {
    return todos.filter(todo => {
      if (todo.status === true) {
        return todo;
      }
    }
    )
  }

  const handleFilter = (e) => {
    if (e.target.innerHTML === "All") {
      setRenderize(todos);
    }

    if (e.target.innerHTML === "Active") {
      setRenderize(
        [...todos].filter((todo) => {
          if (todo.status === false) {
            return todo;
          }
        })
      );
    }

    if (e.target.innerHTML === "Completed") {
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
      <div className="Filter">
        <button type="button" className="Filter__btn" onClick={handleFilter}>
          All
        </button>
        <button type="button" className="Filter__btn" onClick={handleFilter}>
          Active
        </button>
        <button type="button" className="Filter__btn" onClick={handleFilter}>
          Completed
        </button>
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
    </>
  );
};

export default Todos;