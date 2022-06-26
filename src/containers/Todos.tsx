import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';
import { Checkbox } from '@chakra-ui/react'

const Todos = () => {
  const { todos, completeTodo, editTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  const completedTask = todos.filter((todo) => (todo.status))
  const [renderize, setRenderize] = React.useState(todos);
  const [complete, setComplete] = React.useState()


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
      <Checkbox size='sm' value="All" defaultChecked onChange={handleFilter}>
        All
      </Checkbox>
      <Checkbox size='md' value="Complete" onChange={handleFilter}>
        Complete
      </Checkbox>
      <Checkbox size='lg' value="Active" onChange={handleFilter}>
        Active
      </Checkbox>
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