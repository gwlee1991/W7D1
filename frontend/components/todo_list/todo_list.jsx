import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions';

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}
    <TodoForm receiveTodo={receiveTodo} />
  </ul>
);

export default TodoList;
