import React, { Component } from 'react'

class DeleteTasks extends Component {
    updateTasks = ()=>{
        let updatedTasks = this.props.tasks.filter((task)=>{
            return !task.complete
        })
        console.log(updatedTasks)
        this.props.deleteTasks(updatedTasks)
    }

    render() {
        return (
            <button onClick={this.updateTasks}>Remove Complete Tasks</button>
        )
    }
}

export default DeleteTasks