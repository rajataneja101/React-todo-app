import React, { Component } from 'react';
import TodosList from './todos-list';
import './App.css';
import CreateTodo from './create-todo';
import _ from 'lodash';
const todos=[
  {
    task:'make react tutorial',
    isCompleted:true
  },
  {
    task:'eat dinner',
    isCompleted:false
  }
];

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      todos
    };
  }

  render() {
    return (
      <div className="App">
        <h1>HHello</h1>  
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList todos={this.state.todos} toggleTask={this.toggleTask.bind(this)}/>     
      </div>
    );
  }
  createTask(task)
{
  this.state.todos.push({
    task,
    isCompleted:false
  });
  this.setState({todos: this.state.todos});
}
  toggleTask(task)
  {
    const foundtodo= _.find(this.state.todos, todo => todo.task === task);
    foundtodo.isCompleted= !foundtodo.isCompleted;
    this.setState({todos: this.state.todos});
  }
}

export default App;
