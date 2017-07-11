import React from 'react';
import TodoDetailView from './todo_detail_view';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.updateStatus= this.updateStatus.bind(this);
    this.handleClick= this.handleClick.bind(this);
    this.state = {
      detail: false
    };
  }

  render () {
    return (
      <li>
        <a href="#" onClick={ this.handleClick }>{this.props.todo.title}</a>
        <span>{ this.state.detail ? <TodoDetailViewContainer todo={this.props.todo}/> : ""} </span>
        <button type="button" onClick={ this.updateStatus }>{this.props.todo.done ? "Undo" : "Done"}</button>
      </li>
    );
  }

  handleClick(event) {
    event.preventDefault();
    // console.log(this.state.detail);
    if (this.state.detail) {
      this.setState({
        detail: false
      });
    } else {
      this.setState({
        detail: true
      });
    }
    console.log(this.state.detail);
  }

  updateStatus(event) {
    event.preventDefault();
    this.props.updateTodo(this.props.todo);
  }
}

export default TodoListItem;
