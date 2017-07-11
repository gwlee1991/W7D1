import React from 'react';
import uniqueId from '../../util/uniqId';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render (){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type='text' onChange={this.props.receiveTodo}></input>
        </label>
        <label>
          Body:
          <input type='text' onChange={this.props.receiveTodo}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      title: event.target.title,
      body: event.target.body,
    });
  }

}

export default TodoForm;
