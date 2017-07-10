import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: "",
      done: false
    };
  }

  render(){
    return (
      <div>
        <h1>Todo App</h1>
      </div>
    );
  }
}

export default Todo;
