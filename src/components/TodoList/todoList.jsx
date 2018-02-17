import React, { Component } from 'react'
import Todo from '../TodoList/Todo/todo'

class TodoList extends Component {
  
    render() {
        let taskJSX = this.props.tasks.map((task, i) => {
            return (
                <Todo task={task} id={i} complete={this.props.complete} key={i} />
            )
        })
        return (
            <div>
                {taskJSX}
            </div>
        )
    }
}

export default TodoList