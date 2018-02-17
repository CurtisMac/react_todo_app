import React, {Component} from 'react';
import '../../globalStyles.css';

class Todo extends Component {
    render() {
        let { task } = this.props
        let lineThrough
        if (task.complete) {
            lineThrough = { textDecoration: 'line-through' }
        } else if (!task.complete) {
            lineThrough = { textDecoration: 'none' }
        }

        return (
            <div style={lineThrough} className='todo'>
                <input  type='checkbox' 
                        checked={task.complete} id={this.props.id} 
                        onChange={()=>{this.props.complete(this.props.id)}}>
                </input>
                <label htmlFor={this.props.id}>{task.text}</label>
            </div>
        )
    }
}

export default Todo