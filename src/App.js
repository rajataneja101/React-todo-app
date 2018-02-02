import React, { Component } from 'react';
import TodosList from './todos-list';
import './App.css';

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
        <TodosList todos={this.state.todos}/>     
      </div>
    );
  }
}

export default App;
