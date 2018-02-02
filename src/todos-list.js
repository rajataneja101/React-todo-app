import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import _ from 'lodash';
class TodosList extends Component {
    renderItems()
    {
        return 
    }
    render() {
    return (
    <div>
      <table>
            <TodosListHeader />
            <tr>
                {this.renderItems()}
            </tr>
        </table>
      </div>
    );
  }
}

export default TodosList;
