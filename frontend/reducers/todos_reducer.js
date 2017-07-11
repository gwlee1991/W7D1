import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions';
// import RECEIVE_TODO from '../actions/todo_actions';
// import {receiveTodos, receiveTodo} from '../actions/todo_actions';
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_TODOS:
        let newState = {};
        action.todos.forEach((todo) => {
          newState[todo.id] = todo;
        });
        return merge({}, state, newState);
      case RECEIVE_TODO:
        return merge({}, state, {[action.todo.id]: action.todo});
      case REMOVE_TODO:
        let dup = merge({}, state);
        delete dup[action.todo.id];
        return merge({}, dup);
      case UPDATE_TODO:
        let dup2 = merge({}, state);
        let obj = dup2[action.todo.id];
        if (obj.done) {
          obj.done = false;
        } else {
          obj.done = true;
        }
        return merge({}, dup2);
      default:
        return state;
    }
};



export default todosReducer;
