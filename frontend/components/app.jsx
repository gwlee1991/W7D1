import React from 'react';
import Todo from './todo';
import TodoListContainer from './todo_list/todo_list_container';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListContainer/>
    </div>
  );
};

export default App;
