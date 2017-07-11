import React from 'react';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateStatus= this.updateStatus.bind(this);
  }

  render () {
    return (
      <li>
        {this.props.todo.title}
        <button type="button" onClick={ this.handleClick } >Delete</button>
        <button type="button" onClick={ this.updateStatus }>{this.props.todo.done ? "Undo" : "Done"}</button>
      </li>
    );
  }

  updateStatus(event) {
    event.preventDefault();
    this.props.updateTodo(this.props.todo);
  }

  handleClick (event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }
}

export default TodoListItem;
