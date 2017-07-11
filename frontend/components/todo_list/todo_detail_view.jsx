import React from 'react';

class TodoDetailView extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);

    this.handleClick = this.handleClick.bind(this);
  }
  render () {
    return (
      <div className="detail">
        <p>{this.props.todo.body}</p>
        <button type="button" onClick={ this.handleClick } >Delete</button>
      </div>
    );
  }

  handleClick (event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }
}

export default TodoDetailView;
