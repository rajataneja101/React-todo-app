import React, { Component } from 'react';
import TodosList from './todos-list';
import './App.css';
import CreateTodo from './create-todo';
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
        <TodosList todos={this.state.todos} />     
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
}

export default App;
