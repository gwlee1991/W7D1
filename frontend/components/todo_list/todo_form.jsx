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
          <input type='text' value={this.state.title} onChange={this.handleChange('title')} />
        </label>
        <label>
          Body:
          <input type='text' value={this.state.body} onChange={this.handleChange('body')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state);
    todo.id = uniqueId();
    this.props.receiveTodo(todo);
    this.setState({title: "", body: ""});
  }

  handleChange(formField) {
    return (event) => {
      this.setState({
        [formField]: event.target.value,
      });
    };
  }

}

export default TodoForm;
