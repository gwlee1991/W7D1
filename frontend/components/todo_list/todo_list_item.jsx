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
        <button type="button" value={this.props.todo} onClick={ this.handleClick } >Delete</button>
      </li>
    );
  }

  handleClick (event) {
    event.preventDefault();
    console.log(this.props.todo);
    console.log(event.target.value);
    this.props.removeTodo(event.target.value);
  }
}

export default TodoListItem;
