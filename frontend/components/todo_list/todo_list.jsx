import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import TodoListContainer from './todo_list_container';

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}
    <TodoForm receiveTodo={props.receiveTodo} />
  </ul>
);

export default TodoList;
