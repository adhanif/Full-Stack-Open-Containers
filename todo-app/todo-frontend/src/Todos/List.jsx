import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  // console.log(todos);
  console.log(todos);
  // console.log(Array.isArray(todos));
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos.map((todo) => (
        <React.Fragment key={todo._id || todo.text}>
          <Todo
            todo={todo}
            onDelete={onClickDelete(todo)}
            onComplete={onClickComplete(todo)}
          />
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};

export default TodoList;
