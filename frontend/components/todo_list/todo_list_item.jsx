import React from 'react';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render () {
    return (
      <li>
        {this.props.todo.title}
        <button type="button" onClick={ this.handleClick } >Delete</button>
      </li>
    );
  }

  handleClick (event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }
}

export default TodoListItem;
