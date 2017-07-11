import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, content);
});
